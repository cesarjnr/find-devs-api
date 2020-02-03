const parseStringAsArray = (arrayAsString: string): string[] => arrayAsString.split(',').map(string => string.trim());

export default parseStringAsArray;
