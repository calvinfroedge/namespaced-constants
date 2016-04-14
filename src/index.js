const consts = function(namespace){
  return (...args)=>{
    let obj = {};
    
    args.forEach((arg)=>{
      obj[arg] = [namespace, arg].join('_');
    });

    return Object.freeze(obj);
  }
}.bind(null);

export default consts;
