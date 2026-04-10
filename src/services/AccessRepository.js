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
