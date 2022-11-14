// default value getter for cell renderer
export const defaultValueGetter: (cellValue: any) => string | number = (cellValue) => {
    if (typeof cellValue === 'string' || typeof cellValue === 'number')
        return cellValue;
    return '';
};