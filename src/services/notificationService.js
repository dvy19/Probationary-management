const { getMessaging } = require("firebase-admin/messaging");

const sendNotification = async (token, title, body, data = {}) => {

    try {

        const message = {
            token: token,

            notification: {
                title: title,
                body: body
            },

            data: data
        };

        const response = await getMessaging().send(message);

        console.log("FCM notification sent:", response);

        return response;

    } catch (error) {

        console.error("FCM notification error:", error);

        throw error;
    }
};

module.exports = {
    sendNotification
};