export const roleAccessList = [
  {
    id: 1,
    role: "admin",
    view: true,
    create: true,
    edit: true,
    delete: true,
  },
  {
    id: 2,
    role: "doctor",
    view: true,
    create: true,
    edit: true,
    delete: false,
  },
  {
    id: 3,
    role: "patient",
    view: true,
    create: true,
    edit: false,
    delete: false,
  },
];

// export function reportAccessList;
