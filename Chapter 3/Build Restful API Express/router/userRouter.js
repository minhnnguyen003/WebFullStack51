const joi = require('joi');
const express = require('express');
const userRouter = express.Router();

const usersList = [
    {
        id: 1,
        first_name: 'Modesty',
        last_name: 'Mawer',
        email: 'mmawer0@gravatar.com',
        gender: 'Non-binary'
    },
    {
        id: 2,
        first_name: 'Filia',
        last_name: 'Valerius',
        email: 'fvalerius1@domainmarket.com',
        gender: 'Genderqueer'
    },
    {
        id: 3,
        first_name: 'Verile',
        last_name: 'Steers',
        email: 'vsteers2@bluehost.com',
        gender: 'Non-binary'
    },
    {
        id: 4,
        first_name: 'Mort',
        last_name: 'Rowes',
        email: 'mrowes3@bandcamp.com',
        gender: 'Bigender'
    },
    {
        id: 5,
        first_name: 'Frank',
        last_name: 'Pudan',
        email: 'fpudan4@blog.com',
        gender: 'Genderqueer'
    },
    {
        id: 6,
        first_name: 'Ronny',
        last_name: 'Traite',
        email: 'rtraite5@sciencedaily.com',
        gender: 'Male'
    },
    {
        id: 7,
        first_name: 'Granny',
        last_name: 'Joire',
        email: 'gjoire6@prlog.org',
        gender: 'Non-binary'
    },
    {
        id: 8,
        first_name: 'Andromache',
        last_name: 'Brophy',
        email: 'abrophy7@bing.com',
        gender: 'Genderfluid'
    },
    {
        id: 9,
        first_name: 'Shurwood',
        last_name: 'Measor',
        email: 'smeasor8@netlog.com',
        gender: 'Male'
    },
    {
        id: 10,
        first_name: 'Else',
        last_name: 'Stallard',
        email: 'estallard9@amazon.com',
        gender: 'Male'
    }
];

function validateUser(user) {
    const schema = joi.object({
        first_name: joi.string().min(3).max(25).required(),
        last_name: joi.string().min(3).max(30).required(),
        email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'vn', 'edu'] }}).required(),
        gender: joi.string().valid('male', 'female', 'Genderqueer', "Non-binary", "Bigender", "Genderfluid"),
    });

    return schema.validate(user);
};

userRouter.get('/', (req, res) => {
    try {
        res.status(200).send(usersList);
    } catch (error) {
        res.status(500).send(error);
    }
});

userRouter.get('/:id', (req, res) => {
    let index = usersList.findIndex((user) => user.id == req.params.id);
    if(index == -1) res.status(400).send("User not found");
    else res.status(200).send(usersList[index]);
});

userRouter.post('/', (req, res) => {
    const {err} = validateUser(req.body)
    console.log(req.body)
    if(err) res.status(400).send(err.detail[0].message);
    // value chinh la cai gia tri nhap vao
    const newUser = {
        id: usersList.length + 1,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        gender: req.body.gender,
    }
    try {
        usersList.push(newUser);
        res.status(200).send(usersList);
    } catch (error) {
        res.status(500).send(error);
    };
});

userRouter.put('/:id', (req, res) => {
    const {err, value} = validateUser(req.body);
    if(err) res.status(400).send(err.detail[0].message);
    let index = usersList.findIndex((user) => user.id == req.params.id);
    if(index == -1) res.send(404).status("Cannot find user");
    try {
        let oldUser = usersList[index];
        usersList[index].first_name = req.body.first_name;
        usersList[index].last_name = req.body.last_name;
        usersList[index].email = req.body.email;
        usersList[index].gender = req.body.gender;
        res.status(200).send(usersList);
    } catch (err) {
        res.status(500).send(err);
    };
});

userRouter.delete('/:id', (req, res) => {
    let index = usersList.findIndex((user) => user.id == req.params.id);
    if(index == -1) res.send(404).status("Cannot find user");
    try {
        usersList.splice(index, 1);
        res.status(200).send(usersList);
    } catch (error) {
        res.status(500).send(error);
    }
});

module.exports = userRouter;