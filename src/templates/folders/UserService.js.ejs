const User = require('../models/User');

exports.index = async () => {
    return await User.find();
};

exports.show = async (user_id) => {
    const user = await User.findById(user_id);

    if (user == null)
        return null;

    return user;
};

exports.store = async (data) => {
    const user = await User.create(data);
    return user;
};

exports.update = async (user_id, data) => {
    const user = await User.findById(user_id);

    if (user == null)
        return null;

    const newUser = await user.updateOne(data, (err) => {
        if (err)
            return { Error: err };
    });

    return newUser;
};

exports.destroy = async (user_id) => {
    const user = await User.findById(user_id);

    if (user == null)
        return null

    user.remove();
};