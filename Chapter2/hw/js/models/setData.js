const email = document.getElementById('email');
const name = document.getElementById('name');
const company = document.getElementById('company');
const follower = document.getElementById('follower');
const avatar = document.getElementById('avatar');

export default function setData(data) {
    email.innerHTML = (data.email) ? data.email : 'N/A';
    name.innerHTML = (data.name) ? data.name : 'N/A';
    company.innerHTML = (data.company) ? data.company : 'N/A';
    follower.innerHTML = (data.followers) ? data.followers : 0;
    avatar.style.background = `url(${data.avatar_url})`;
}