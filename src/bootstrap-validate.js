/**
 * @param {string} el Form Element Selector
 * @return BootstrapValidate.prototype
 */
const BootstrapValidate = (el) => {
  const formElement = el.toString();
  BootstrapValidate.current = formElement;
  BootstrapValidate.instances = BootstrapValidate.instances || {};

  BootstrapValidate.instances[formElement] = {
    formElement,
  };

  return BootstrapValidate.prototype;
};

BootstrapValidate.prototype = {
  /**
   *
   * @param {int} version
   */
  bootstrap(version) {
    const preset = import(`./bootstrap/Bootstrap${version}.js`);
    BootstrapValidate.instances[BootstrapValidate.current] = [preset];

    return BootstrapValidate.prototype;
  },
}


export default BootstrapValidate;
