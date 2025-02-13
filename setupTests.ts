import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import '@testing-library/jest-native/extend-expect';

configure({adapter: new Adapter()});
jest.mock('@react-native-async-storage/async-storage', () =>
    require('@react-native-async-storage/async-storage/jest/async-storage-mock'),
);