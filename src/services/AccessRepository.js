import { roleAccessList } from "../data/accessStorage";

export class AccessRepository {
  getList() {
    return roleAccessList;
  }

  updateAccess = (access) => {
    const index = roleAccessList.findIndex((r) => r.role === access.role);
    if (index !== -1) {
      roleAccessList[index] = access;
    }
  };
}

// export const getAccessList = () => {
//   return roleAccessList;
// };

// export const getAccessForAdmin = () => {
//   return roleAccessList.find((r) => r.role === "admin");
// };

// export const getAccessForDoctor = () => {
//   return roleAccessList.find((r) => r.role === "doctor");
// };

// export const getAccessForPatient = () => {
//   return roleAccessList.find((r) => r.role === "patient");
// };

// export const updateAccess = (access) => {
//   const index = roleAccessList.findIndex((r) => r.role === access.role);
//   if (index !== -1) {
//     roleAccessList[index] = access;
//   }
// };
