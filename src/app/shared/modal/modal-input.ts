import { Component } from "@angular/core";

export interface ModalInput {
  title: string;
  body: string | HTMLElement;
  primaryButtonTitle?: string;
  secondaryButtonTitle?: string;
  template?: any
}
