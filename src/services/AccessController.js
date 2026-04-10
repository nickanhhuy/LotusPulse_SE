import { AccessRepository } from "./AccessRepository";

const repo = new AccessRepository();

export const getAccessList = () => {
  return repo.getList();
};

export const getAccessForAdmin = () => {
  return repo.getList().find((r) => r.role === "admin");
};

export const getAccessForDoctor = () => {
  return repo.getList().find((r) => r.role === "doctor");
};

export const getAccessForPatient = () => {
  return repo.getList().find((r) => r.role === "patient");
};

export const updateAccess = (access) => {
  repo.updateAccess(access);
};
