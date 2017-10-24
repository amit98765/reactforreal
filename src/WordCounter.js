import React from 'react';

import ProgressBar from './ProgressBar';
import Counter from './Counter';
import Editor from './Editor';
import SaveManager from './SaveManager';
import countWords from './countWords';
import makeFakeRequest from './makeFakeRequest';


class WordCounter extends React.Component {
    constructor() {
        super();
        this.state = {
            text: 'this is my tezt'
        };
        this.handleTextChange = this.handleTextChange.bind(this);
    }

    handleTextChange(currentText) {
        this.setState(() => ({
            text: currentText
        }));
    }
    render() {

        const { targetWordCount } = this.props;
        const { text } = this.state;

        const wordCount = countWords(text);
        const progress = wordCount / targetWordCount;

        return (
            <form className="measure pa4 sans-serif">
                <Editor text={text}
                    onTextChange={this.handleTextChange}
                />
                <div className="flex mt3">
                    <Counter count={wordCount} />
                    <ProgressBar completion={progress} />
                    <SaveManager saveFunction={makeFakeRequest} data={this.state} />
                </div>
            </form>
        );
    }
}




export default WordCounter;