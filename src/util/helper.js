export const isActivePath = (activePath, path) => {
  return activePath.toLocaleLowerCase().includes(path.toLocaleLowerCase());
};
