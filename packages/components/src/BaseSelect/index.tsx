const BaseSelect = (props: any) => {
  const formatValueEnum = () => {
    if (props?.valueEnum) {
      const param = props.valueEnum.find((v: any) => v.value === props.value);
      if (param) return param.label;
      return props.value;
    }

    return props.value;
  };

  return <div>{formatValueEnum()}</div>;
};

export default BaseSelect;
