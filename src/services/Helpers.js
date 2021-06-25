//obtiene el token y busca usuarios admin, empleado o ambos a la vez
const getRoles = async () => {
  const token = await localStorage.getItem("token");
  if (token) {
    const role = JSON.parse(atob(token.split(".")[1])).rol;
    const listRoles = [];
    role.forEach((element) => {
      listRoles.push(element.nombre_rol);
    });
    const admin = listRoles.find((element) => element == "admin");
    const empleado = listRoles.find((element) => element == "empleado");
    const vendedor = listRoles.find((element) => element == "vendedor");
    const almacenero = listRoles.find((element) => element == "almacenero");
    //const almacenero = listRoles.find((element) => element == "almacenero");
    return { admin, empleado, vendedor, almacenero };
  } else {
    return false;
  }
};
//es admin
const isAdministrator = async () => {
  const rolAdmin = await getRoles();
  if (rolAdmin.admin == "admin") {
    return true;
  } else {
    return false;
  }
};
//es empleado
const isEmployee = async () => {
  const rolEmplado = await getRoles();
  if (rolEmplado.empleado == "empleado") {
    return true;
  } else {
    return false;
  }
};
//es vendedor
const isSeller = async () => {
  const rolVendedor = await getRoles();
  if (rolVendedor.vendedor == "vendedor") {
    return true;
  } else {
    return false;
  }
};
//es almacenero
const isGrocer = async () => {
  const rolAlmacenero = await getRoles();
  if (rolAlmacenero.almacenero == "almacenero") {
    return true;
  } else {
    return false;
  }
};
/*si están logueados cualquiera de ellos devuelve true*/
const isLoggedIn = async () => {
  if (await isAdministrator() || await isEmployee() || await isSeller() || await isGrocer()) {
    return true;
  } else {
    return false;
  }
};
const getUrls = async () => {
  const roles = await getRoles();
  let url = []
  let rol = "";
  let path = "";
  for (const property in roles) {
    if (roles[property] !== undefined) {
      rol = roles[property];
    }
  }
  if (rol == "admin" || rol == "empleado") {
    url.push({ path: "/usuarios" });
  } else {
    if (rol == "vendedor") {
      url.push({ path: "/ventas" });
    } else {
      if (rol == "almacenero") {
        url.push({ path: "/compras" });
      } else {
        url.push({ path: "/" });
      }
    }
  }
  path = url[0].path;
  return { url, rol, path }
}
export default {
  getRoles,
  isAdministrator,
  isEmployee,
  isSeller,
  isGrocer,
  isLoggedIn,
  getUrls

};
