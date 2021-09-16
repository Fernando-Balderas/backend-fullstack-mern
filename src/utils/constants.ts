export const tokenTypes = {
  ACCESS: "access",
  REFRESH: "refresh",
  RESET_PASSWORD: "resetPassword",
  VERIFY_EMAIL: "verifyEmail",
};

const allRoles = {
  user: [],
  admin: ["getUsers", "manageUsers"],
};
const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));
export {
  roles,
  roleRights,
};
