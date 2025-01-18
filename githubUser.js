const axios = require('axios');

async function getUserInfo(username) {
    try {
        const response = await
axios.get(`https://api.github.com/users/${username}`);
        const { name, email, avatar_url } = response.data;

        return {
            nome: name,
            email: email || 'Email não disponível',
            fotoPerfil: avatar_url,
        };
    } catch (error) {
        console.error('Erro ao consultar a API: ', error.message);
        return null;
    }
}

module.exports = getUserInfo;