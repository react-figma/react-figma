import { StyleSheet } from '../StyleSheet';

describe('StyleSheet', () => {
    it('compose', () => {
        const style1 = {
            width: '100%',
            backgroundColor: 'green'
        };

        const style2 = {
            height: '100%',
            backgroundColor: 'red'
        };

        const result = StyleSheet.compose(style1, style2);
        expect(result).toMatchSnapshot();
    });

    it('flatten', () => {
        var styles = StyleSheet.create({
            listItem: {
                flex: 1,
                fontSize: 16,
                color: 'white'
            },
            selectedListItem: {
                color: 'green'
            }
        });

        const result = StyleSheet.flatten([styles.listItem, styles.selectedListItem]);
        expect(result).toMatchSnapshot();
    });
});
