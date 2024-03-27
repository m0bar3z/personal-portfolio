import { type FC, memo } from 'react';
import { ReactTerminal, TerminalContextProvider } from 'react-terminal';
import Help from './components/Help.component';
import CommandContainer from './components/Command.container';
import Welcome from './components/Welcome.component';
import Error from './components/Error.component';
import Email from './components/Email.component';

const Terminal: FC = () => {
  const commands = {
    help: <Help />,
    email: <Email />,
    copy: (value: string) => {
      if (value === 'email') {
        navigator.clipboard.writeText('amobarez00@gmail.com');
        return (
          <CommandContainer>
            <span className='ml-4'>email copied!</span>
          </CommandContainer>
        );
      } else if (value.length > 30) {
        return <Error title='argument must be less than 30 characters!' />;
      } else {
        navigator.clipboard.writeText(value);
        return (
          <CommandContainer>
            <span className='ml-4'>copied to clipboard!</span>
          </CommandContainer>
        );
      }
    },
  };
  return (
    <TerminalContextProvider>
      <div className='w-11/12 md:w-9/12 lg:w-2/5 h-96'>
        <ReactTerminal
          commands={commands}
          themes={{
            'my-theme': {
              themeBGColor: '#FDF6E4',
              themeToolbarColor: '#DBDBDB',
              themeColor: '#333333',
              themePromptColor: '#4495D4',
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
