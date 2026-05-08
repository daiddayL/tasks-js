class User {
    #password;

    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }

    #updatePassword(newPassword) {
        this.#password = newPassword;
    }

    resetPassword(newPassword) {
        this.#updatePassword(newPassword);
    }
}

class Admin extends User {
    isAdmin = true;

    constructor(username, password) {
        super(username, password);
    }

    deleteUser(userToDelete) {
        return `Пользователь ${userToDelete} был удален.`;
    }
}

const testUser = new User("john_doe", "user123");
const testAdmin = new Admin("admin", "admin123");

const result = [testUser, testAdmin];