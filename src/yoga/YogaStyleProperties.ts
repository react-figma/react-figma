type Dimension = number | string;

export type YogaStyleProperties = {
    width?: Dimension;
    height?: Dimension;
    minHeight?: Dimension;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    alignItems?: 'flex-start' | 'center' | 'stretch' | 'flex-end';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    paddingTop?: Dimension;
    paddingBottom?: Dimension;
    paddingLeft?: Dimension;
    paddingRight?: Dimension;
    marginTop?: Dimension;
    marginBottom?: Dimension;
    marginLeft?: Dimension;
    marginRight?: Dimension;
    borderWidth?: number;
};
