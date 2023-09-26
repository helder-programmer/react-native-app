const users = [
    {
        email: 'nicollashelder@gmail.com',
        password: '12345'
    },

    {
        email: 'nick@gmail.com',
        password: '123456'
    },
    {
        email: 'fulano@gmail.com',
        password: '32614255'
    }
];

export const UserService = {
    verifyEmailAndPassword: async (email, password) => {
        return !!users.find(user => user.email === email && user.password === password);
    }
}