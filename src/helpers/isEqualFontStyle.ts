export const isEqualFontStyle = (style1: string, style2: string) => {
    const style1Normalized = style1.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    const style2Normalized = style2.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return style1Normalized === style2Normalized;
};
