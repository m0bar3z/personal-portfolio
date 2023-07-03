import { type FC, memo, useMemo } from 'react';
import Button from '@/components/ui/Button/Button.component';
import { NewTabIcon, GithubIcon } from '@/components/ui/icons';

interface LinkButtonsPropsType {
  launchUrl: string;
  sourceUrl: string;
}

const LinkButtons: FC<LinkButtonsPropsType> = ({ launchUrl, sourceUrl }) => {
  return (
    <div className='flex gap-4'>
      <Button className='w-full' variant='contained' onClick={() => window.open(launchUrl, '_blank')}>
        {useMemo(
          () => (
            <>
              Launch
              <NewTabIcon fill='#5B9E47' width={17} className='mb-[2px]' />
            </>
          ),
          []
        )}
      </Button>

      <Button className='w-full' variant='outlined' onClick={() => window.open(sourceUrl, '_blank')}>
        {useMemo(
          () => (
            <>
              <GithubIcon width={17} className='mb-[2px]' />
              Source
            </>
          ),
          []
        )}
      </Button>
    </div>
  );
};

export default memo(LinkButtons);
