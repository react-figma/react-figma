import { getRectangleStyleProperties } from '../getRectangleStyleProperties';
import { StyleSheet } from '../..';

describe('getRectangleStyleProperties', () => {
    it('getRectangleStyleProperties', () => {
        const styles = StyleSheet.create({
            view: {
                width: '100%',
                height: 50,
                opacity: 0.9,
                borderRadius: 25,
                backgroundColor: '#000000',
                shadowColor: 'rgba(217, 217, 217, 0.5)',
                shadowOffset: {
                    width: 0,
                    height: 5
                },
                shadowRadius: 10,
                shadowOpacity: 1,
                alignItems: 'center',
                flexDirection: 'row',
                paddingLeft: 8,
                paddingRight: 8
            }
        });
        const result = getRectangleStyleProperties(styles.view);
        expect(result).toMatchSnapshot();
    });
});
