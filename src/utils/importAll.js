export default (context) => {
  const modules = {};
  context.keys().forEach((key) => {
    modules[key] = context(key);
  });
  return modules;
};
