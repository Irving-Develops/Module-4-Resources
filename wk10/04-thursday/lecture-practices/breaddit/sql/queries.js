async function updateUser(userId) {
    const user = await User.findByPk(userId);

    user.username = 'Irving';
    user.bio = 'I am awesome'

    await user.save();
}

async function deleteUser(username) {
    const user = await User.findOne({
            where: { username}
        })

        await user.destroy();
}

async function getProfile(userId) {
    const user = await User.findByPk(userId, {
        include: Post
    });
}