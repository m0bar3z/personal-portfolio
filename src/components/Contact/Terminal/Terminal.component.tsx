import { type FC, memo } from 'react';
import { ReactTerminal, TerminalContextProvider } from 'react-terminal';
import Help from './components/Help.component';
import CommandContainer from './components/Command.container';
import Welcome from './components/Welcome.component';
import Error from './components/Error.component';

const Terminal: FC = () => {
  const commands = {
    help: <Help />,
    email: (
      <CommandContainer>
        <span className='ml-2 font-bold'>mzali9895@gmail.com</span>
      </CommandContainer>
    ),
  };
  return (
    <TerminalContextProvider>
      <div className='w-2/5 h-96'>
        <ReactTerminal
          commands={commands}
          themes={{
            'my-theme': {
              themeBGColor: '#FDF6E4',
              themeToolbarColor: '#DBDBDB',
              themeColor: 'black',
              themePrompColor: '#4495D4',
            },
          }}
          theme='my-theme'
          welcomeMessage={<Welcome />}
          errorMessage={<Error />}
          prompt='~carl/contact $'
        />
      </div>
    </TerminalContextProvider>
  );
};

export default memo(Terminal);
