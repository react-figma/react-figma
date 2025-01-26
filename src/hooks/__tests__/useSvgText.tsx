import * as React from 'react';
import { createFigma } from 'figma-api-stub';
import { render } from '../../renderer';
import { wait } from '../../helpers/wait';
import fetchMock from 'jest-fetch-mock';
import { useSvgText } from '../useSvgText';

const svgMock =
    '<svg width="1000" height="1000" viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">\n' +
    '<path d="M525.671 828.744C621.501 918.744 711.361 951.094 758.421 900.844C830.421 823.944 774.931 582.794 634.481 362.244C524.761 189.914 395.641 81.1443 310.071 78.4643C286.071 77.7143 265.571 85.2643 249.821 102.094C177.821 178.984 233.311 420.094 373.761 640.684C397.737 678.508 423.95 714.867 452.261 749.564L481.601 717.404C465.681 696.994 449.601 674.834 433.701 651.094C305.561 460.144 232.001 237.794 269.321 154.494C278.661 133.674 294.051 123.494 313.891 122.964C373.381 121.314 472.891 206.224 568.981 349.434C697.121 540.384 770.701 762.744 733.351 845.994C707.721 903.174 636.461 879.994 552.851 798.064L552.321 797.434L525.671 828.744Z" fill="#212121"/>\n' +
    '<path d="M777.201 318.084C796.761 233.904 796.001 164.324 773.851 122.154C762.561 100.654 745.721 86.2641 723.231 80.6541C716.632 79.0238 709.868 78.1548 703.071 78.0641C653.151 77.1641 589.241 113.064 523.641 174.274L523.261 174.624C526.871 178.314 535.571 187.544 535.671 187.624C544.201 196.714 548.321 200.924 553.201 205.684C603.341 157.184 650.671 126.834 687.351 123.594C710.141 121.594 726.651 130.154 737.011 147.374C755.301 177.754 754.291 235.174 734.831 308.824L777.201 318.084Z" fill="#212121"/>\n' +
    '<path d="M302.391 590.744C312.391 565.744 323.701 539.874 337.011 512.964C378.401 429.254 428.741 351.244 480.011 287.064L449.371 253.744C401.811 311.144 355.791 379.484 316.171 454.964C295.135 495.102 276.628 536.516 260.761 578.964L260.001 581.244L302.391 590.744Z" fill="#212121"/>\n' +
    '<path d="M699.761 411.434C690.161 434.794 679.351 458.944 667.041 483.844C564.701 690.844 407.871 865.134 316.731 873.184C254.621 878.674 239.651 804.984 268.481 692.274L228.111 684.024C198.441 811.374 214.811 905.604 281.511 922.244C384.351 947.904 566.601 780.314 688.571 547.904C710.223 506.828 729.293 464.442 745.671 420.994L699.761 411.434Z" fill="#212121"/>\n' +
    '<path d="M327.001 371.874C352.381 368.274 379.171 365.471 407.371 363.464C637.011 347.464 865.891 395.404 918.591 470.464C931.771 489.224 932.681 507.904 923.061 525.624C906.371 556.354 857.411 584.014 786.161 604.304C788.371 611.414 790.611 618.224 794.161 628.964C794.361 629.564 797.661 639.474 799.631 645.434C880.001 619.864 938.501 584.744 963.291 544.744C976.131 524.064 980.071 502.174 973.601 479.814C945.901 383.984 736.881 313.504 495.481 314.744C479.395 314.837 463.175 315.244 446.821 315.964C402.209 317.926 357.756 322.572 313.701 329.874L327.001 371.874Z" fill="#212121"/>\n' +
    '<path d="M677.171 626.934C652.171 630.444 625.861 633.234 598.171 635.154C368.561 651.104 139.721 603.244 87.0014 528.214C51.0014 477.014 107.001 426.644 218.881 394.654L205.881 355.404C80.8814 394.074 7.88136 456.084 27.0314 522.494C56.6014 624.744 292.461 698.094 553.851 686.314C600.55 684.297 647.074 679.317 693.141 671.404L677.171 626.934Z" fill="#212121"/>\n' +
    '<path d="M451.001 583.054L406.491 506.054C405.796 504.69 405.434 503.18 405.434 501.649C405.434 500.118 405.796 498.608 406.491 497.244L451.231 420.364C452.072 419.083 453.203 418.017 454.532 417.255C455.861 416.492 457.351 416.053 458.881 415.974L548.161 416.104C549.692 416.193 551.18 416.639 552.507 417.406C553.833 418.174 554.962 419.242 555.801 420.524L600.301 497.524C600.997 498.888 601.359 500.398 601.359 501.929C601.359 503.46 600.997 504.97 600.301 506.334L555.551 583.214C554.711 584.496 553.58 585.561 552.251 586.324C550.922 587.086 549.432 587.525 547.901 587.604L458.631 587.474C457.102 587.386 455.615 586.941 454.29 586.173C452.965 585.405 451.838 584.337 451.001 583.054Z" fill="#A548F7"/>\n' +
    '<path d="M334.781 787.194L384.401 891.494C385.467 893.744 385.597 896.324 384.763 898.669C383.929 901.014 382.198 902.933 379.951 904.004L275.661 953.624C273.412 954.694 270.83 954.827 268.483 953.995C266.135 953.162 264.214 951.432 263.141 949.184L213.521 844.884C212.992 843.768 212.688 842.559 212.626 841.325C212.565 840.091 212.747 838.858 213.163 837.695C213.58 836.532 214.221 835.462 215.051 834.547C215.882 833.633 216.884 832.891 218.001 832.364L322.261 782.744C324.512 781.678 327.094 781.548 329.441 782.382C331.788 783.216 333.708 784.947 334.781 787.194Z" fill="#03D17E"/>\n' +
    '<path d="M823.792 426.334C823.792 411.501 828.19 397 836.431 384.667C844.672 372.333 856.386 362.72 870.09 357.043C883.795 351.367 898.875 349.881 913.423 352.775C927.972 355.669 941.336 362.812 951.825 373.301C962.313 383.79 969.457 397.154 972.35 411.703C975.244 426.251 973.759 441.331 968.082 455.036C962.406 468.74 952.793 480.453 940.459 488.694C928.126 496.936 913.625 501.334 898.792 501.334C878.9 501.334 859.824 493.432 845.759 479.367C831.693 465.302 823.792 446.226 823.792 426.334Z" fill="#02B8FA"/>\n' +
    '<path d="M190.861 130.174C186.081 127.464 186.051 122.974 190.811 120.174L317.811 46.2543C322.561 43.4943 326.451 45.7242 326.451 51.2542V197.254C326.451 202.754 322.541 205.034 317.761 202.314L190.861 130.174Z" fill="#FA3800"/>\n' +
    '<path d="M324.001 203.024L254.741 83.0242L318.181 46.1042C318.181 46.1042 321.181 44.3242 323.351 45.2842C323.351 45.2842 326.231 45.9442 326.411 50.6142V198.344C326.411 198.344 326.331 201.824 324.001 203.024Z" fill="#FC6558"/>\n' +
    '</svg>';

describe('useSvgText', () => {
    beforeEach(() => {
        // @ts-ignore
        global.figma = createFigma({
            simulateErrors: true
        });
    });

    it('useSvgText for remote URL', async () => {
        const callback = jest.fn();
        fetchMock.once(svgMock);
        const Component = () => {
            const svgText = useSvgText(
                'https://raw.githubusercontent.com/react-figma/react-figma/dfa655881c7944a8ec76ef9758c92a480ae27959/logo.svg'
            );
            if (svgText) {
                callback(svgText);
            }
            return null;
        };
        await render(<Component />);
        await wait();
        await wait();
        await wait();
        await wait();
        expect(callback).toHaveBeenCalledWith(svgMock);
    });
});
