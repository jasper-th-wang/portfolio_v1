import * as React from "react";

import { useForm, ValidationError } from "@formspree/react";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DrawerDialogDemo() {
  const [state, handleSubmit] = useForm("mnqejabp");
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");
  let buttonName, title;
  buttonName = title = "Say Hello 👋";
  let message =
    "Shoot me a message and I will get back to you as soon as possible!";
  if (state.succeeded) {
    title = "Thank you 😊";
    message =
      "Thank you for reaching out! I will get back to you as soon as possible!";
  } else if (state.errors !== null) {
    title = "Oops... 😅";
    message = "Something went wrong, please refresh and try again.";
  }

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="secondary" className="duration-500">
            {buttonName}
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:tw-max-w-[425px]">
          <DialogHeader>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{message}</DialogDescription>
          </DialogHeader>
          <ProfileForm formState={state} handleFormSubmit={handleSubmit} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="secondary" className="duration-500">
          {buttonName}
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="tw-text-left">
          <DrawerTitle>{title}</DrawerTitle>
          <DrawerDescription>{message}</DrawerDescription>
        </DrawerHeader>
        <ProfileForm
          className="tw-px-4"
          formState={state}
          handleFormSubmit={handleSubmit}
        />
        <DrawerFooter className="tw-pt-2">
          <DrawerClose asChild>
            <Button variant="outline">
              {state.succeeded ? "Dismiss" : "Cancel"}
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className, formState, handleFormSubmit }) {
  if (formState.succeeded || formState.errors !== null) {
    return null;
  }
  return (
    <form
      onSubmit={handleFormSubmit}
      className={cn("tw-grid tw-items-start tw-gap-4", className)}
    >
      <div className="tw-grid tw-gap-2">
        <Label htmlFor="name">Name</Label>
        <Input
          type="text"
          id="name"
          placeholder="Someone I can't wait to meet"
          required
        />
        <ValidationError prefix="Name" field="name" errors={formState.errors} />
      </div>
      <div className="tw-grid tw-gap-2">
        <Label htmlFor="email">Email</Label>
        <Input
          type="email"
          id="email"
          placeholder="email@example.com"
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={formState.errors}
        />
      </div>
      <div className="tw-grid tw-gap-2">
        <textarea
          name="message"
          id="message"
          cols="30"
          rows="10"
          placeholder="message"
          required
          className="tw-flex tw-h-30 tw-w-full tw-rounded-md tw-border tw-border-input tw-bg-transparent tw-px-3 tw-py-1 tw-text-sm tw-shadow-sm tw-transition-colors file:tw-border-0 file:tw-bg-transparent file:tw-text-sm file:tw-font-medium placeholder:tw-text-muted-foreground placeholder:tw-opacity-50 focus-visible:tw-outline-none focus-visible:tw-ring-1 focus-visible:tw-ring-ring disabled:tw-cursor-not-allowed disabled:tw-opacity-50"
        ></textarea>
        <ValidationError
          prefix="Message"
          field="message"
          errors={formState.errors}
        />
      </div>
      <Button type="submit" variant="outline" disabled={formState.submitting}>
        Submit
      </Button>
    </form>
  );
}
