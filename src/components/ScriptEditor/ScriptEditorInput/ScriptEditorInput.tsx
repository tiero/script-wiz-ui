/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useEffect } from 'react';

import * as languageOptions from '../../../options/editorOptions/languageOptions';
import * as Monaco from 'monaco-editor/esm/vs/editor/editor.api';
import themeOptions from '../../../options/editorOptions/themeOptions';
import Editor, { useMonaco } from '@monaco-editor/react';
import editorOptions from '../../../options/editorOptions/editorOptions';

import { scriptWizEditor } from '../../../options/editorOptions/utils/constant';
import initialEditorValue from './initialEditorValue';
import { convertEditorLines } from '../../../helper';
import { ScriptWiz } from '@script-wiz/lib';
import './ScriptEditorInput.scss';

type Props = {
  scriptWiz: ScriptWiz;
  onChangeScriptEditorInput: (lines: string[]) => void;
};

const ScriptEditorInput: React.FC<Props> = ({ scriptWiz, onChangeScriptEditorInput }) => {
  const monaco = useMonaco();

  useEffect(() => {
    // language define
    if (monaco !== null) {
      monaco.languages.register({ id: scriptWizEditor.LANGUAGE });

      // Define a new theme that contains only rules that match this language
      monaco.editor.defineTheme(scriptWizEditor.THEME, themeOptions);

      monaco.languages.setLanguageConfiguration(scriptWizEditor.LANGUAGE, languageOptions.languageConfigurations(monaco.languages));

      // Register a tokens provider for the language
      monaco.languages.setMonarchTokensProvider(scriptWizEditor.LANGUAGE, languageOptions.tokenProviders);

      monaco.languages.registerHoverProvider(scriptWizEditor.LANGUAGE, languageOptions.hoverProvider(scriptWiz));

      monaco.languages.registerCompletionItemProvider(scriptWizEditor.LANGUAGE, {
        provideCompletionItems: (model: any, position: any) => {
          const suggestions = languageOptions.languageSuggestions(monaco.languages, model, position, scriptWiz);
          return { suggestions: suggestions };
        },
      });
    }

    /*    return () => {
      if (monaco) {
        monaco.editor.getModels().forEach((model) => model.dispose());
      }
    }; */
  }, [monaco, scriptWiz]);

  const onChangeEditor = (value: string | undefined, ev: Monaco.editor.IModelContentChangedEvent) => {
    if (value) {
      let lines = convertEditorLines(value);

      onChangeScriptEditorInput(lines);
    } else {
      onChangeScriptEditorInput([]);
    }
  };

  if (monaco != null) {
    return (
      <Editor
        className="script-wiz-monaco-editor"
        onMount={() => {
          console.log('loading state');
        }}
        defaultValue={initialEditorValue}
        options={editorOptions}
        language={scriptWizEditor.LANGUAGE}
        theme={scriptWizEditor.THEME}
        onChange={onChangeEditor}
      />
    );
  }

  return null;
};

export default ScriptEditorInput;
