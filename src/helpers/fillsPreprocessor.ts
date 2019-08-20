import { getImageHandler } from './getImageHandler';

export const fillsPreprocessor = async (props): Promise<Array<Paint>> => {
    if (props.fills) {
        const newFills = props.fills.map(async fill => {
            if (fill.type !== 'IMAGE' || !fill.image) {
                return fill;
            }

            const mappedFill = { ...fill };

            const imageHandler = await getImageHandler(mappedFill.image);
            delete mappedFill.image;

            mappedFill.imageHash = imageHandler.hash;
            mappedFill.scaleMode = mappedFill.scaleMode || 'FILL';

            return mappedFill;
        });

        return await Promise.all(newFills);
    }

    return [];
};
