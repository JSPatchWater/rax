
export default {

  /**
   * parse w3c attrs to weex module attrs
   *
   * @param {Object} w3c component data
   * @return {Object} weex component data
   */
  parse: function(component) {
    let {props} = component;

    if (typeof props.children === 'string' && !props.value) {
      props.value = props.children;
      delete props.children;
    }

    return component;
  }
};