import React from 'react';
import { shallow } from 'enzyme';
import WordCounter from '../WordCounter';
import countWords from '../countWords';
import Counter from '../Counter';
import Editor from '../Editor';
import ProgressBar from '../ProgressBar';

describe("When i type some words", () => {
    const target = 10;
    const inputString = "one two three four";
    const WordCounter = shallow(<WordCounter targetWordCount={target} />);

    const textarea = WordCounter.find(Editor).dive().find('textarea');
    textarea.simulate('change', { target: { value: inputString } });

    expect(counter.prop('count')).toBe(countWords(inputString));
})