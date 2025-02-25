import { cn } from '@/lib/utils';
import React from 'react';
import { forwardRef } from 'react';

type PageElement = HTMLDivElement;
type PageProps = React.HTMLAttributes<HTMLDivElement>;

const Page = React.forwardRef<PageElement, PageProps>(
  ({ children, className, ...other }, ref) => (
    <div
      ref={ref}
      className={cn(
        'p-8 flex flex-col p-md h-full bg-background rounded-lg border-sidebar-border border-[1px]',
        className,
      )}
      {...other}
    >
      {children}
    </div>
  ),
);
Page.displayName = 'Page';

const PageHeader = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div className="flex gap-3 items-start justify-start">
    <div
      ref={ref}
      className={cn('flex flex-col items-start space-y-1.5', className)}
      {...props}
    />
  </div>
));
PageHeader.displayName = 'PageHeader';

const PageHeaderTitle = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn(
      'text-2xl font-semibold leading-none tracking-tight',
      className,
    )}
    {...props}
  />
));
PageHeaderTitle.displayName = 'PageHeaderTitle';

const PageHeaderDescription = forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
));
PageHeaderDescription.displayName = 'PageHeaderDescription';

const PageContent = forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('w-full flex-grow overflow-auto pt-8', className)}
    {...props}
  />
));
PageContent.displayName = 'PageContent';

export {
  PageHeader,
  PageHeaderDescription,
  PageHeaderTitle,
  Page,
  PageContent,
};
