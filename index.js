const getUserInfo = require('./githubUser');
const prompt = require('prompt-sync')();

const username = prompt(`Digite o usuário que deseja pesquisar: `);

getUserInfo(username).then(userInfo => {
    if (userInfo) {
        console.log('Informações do Usuário: ', userInfo);
    } else {
        console.log('Usuário não encontrado.');
    }
})