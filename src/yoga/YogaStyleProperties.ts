type Dimension = number | string;

export type YogaStyleProperties = {
    position?: 'absolute' | 'relative';
    width?: Dimension;
    height?: Dimension;
    minWidth?: Dimension;
    maxWidth?: Dimension;
    minHeight?: Dimension;
    maxHeight?: Dimension;
    flexDirection?: 'row' | 'column' | 'row-reverse' | 'column-reverse';
    alignItems?: 'flex-start' | 'center' | 'stretch' | 'flex-end';
    justifyContent?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around';
    padding?: Dimension;
    paddingTop?: Dimension;
    paddingBottom?: Dimension;
    paddingLeft?: Dimension;
    paddingRight?: Dimension;
    paddingVertical?: Dimension;
    paddingHorizontal?: Dimension;
    margin?: Dimension;
    marginTop?: Dimension;
    marginBottom?: Dimension;
    marginLeft?: Dimension;
    marginRight?: Dimension;
    marginVertical?: Dimension;
    marginHorizontal?: Dimension;
    borderWidth?: number;
};
