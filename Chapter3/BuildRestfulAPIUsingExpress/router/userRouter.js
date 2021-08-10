const express = require('express');
const userRouter = express.Router();

var users = [
	{id: 1, name: "User1", email: "user1@gmail.com", age: 31}, 
	{id: 2, name: "User2", email: "user2@gmail.com", age: 20},
	{id: 3, name: "User1", email: "user1.2@gmail.com", age: 25}
];

userRouter.get("/", (req, res) => {
    res.status(200).send(users);
});

userRouter.get("/:id", (req, res) => {
    const getUserIndex = users
        .map((user) => user.user_id.toString())
        .indexOf(req.params.id);

    if (getUserIndex === -1) return res.status(404).send("User not found.");

    res.status(200).send(users[getUserIndex]);
});

userRouter.post("/", (req, res) => {
    const { error, value } = validateUserInfos(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const user = {
        id: randomID(),
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        address: req.body.address,
    };
    users.push(user);
    res.status(200).send(users);
});

userRouter.put("/:id", (req, res) => {
    const { error, value } = validateUserInfos(req.body);
    if (error) return res.status(400).send(error.details[0].message);

    const updateUserIndex = users
        .map((user) => user.user_id.toString())
        .indexOf(req.params.id);

    if (updateUserIndex === -1) return res.status(404).send("User not found.");

    update(updateUserIndex, req.body);
    res.status(200).send(users);
});

userRouter.delete("/:id", (req, res) => {
    const deleteUserIndex = users
        .map((user) => user.user_id.toString())
        .indexOf(req.params.id);

    if (deleteUserIndex === -1) return res.status(404).send("user not found.");

    users.splice(deleteUserIndex, 1);
    res.status(200).send(users);
});

const validateUserInfos = (user) => {
    const schema = Joi.object({
        name: Joi.string().min(5).required(),
        age: Joi.number().min(5).required(),
        email: Joi.string()
            .email({
                minDomainSegments: 2,
                tlds: { allow: ["com", "net", "vn", "xyz", "cn"] },
            })
            .required(),
        address: Joi.string().min(5).required(),
    });

    return schema.validate(user);
};

const update = (index, Data) => {
    users[index].name = Data.name;
    users[index].age = Data.age;
    users[index].email = Data.email;
    users[index].address = Data.address;
};

module.exports = userRouter;