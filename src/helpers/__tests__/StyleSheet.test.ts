import { StyleSheet } from '../StyleSheet';

describe('StyleSheet', () => {
    it('compose', () => {
        const style1 = StyleSheet.create({
            container: {
                width: '100%'
            },
            inner: {
                backgroundColor: 'green',
                margin: 20
            },
            text: {
                fontFamily: 'Helvetica',
                fontSize: 24
            }
        });

        const style2 = StyleSheet.create({
            container: {
                height: '100%'
            },
            inner: {
                backgroundColor: 'red'
            },
            icon: {
                width: 20,
                height: 20
            }
        });

        const result = StyleSheet.compose(
            style1,
            style2
        );
        expect(result).toMatchSnapshot();
    });
});
