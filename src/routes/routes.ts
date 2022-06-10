import { lazy, LazyExoticComponent } from "react";
import NoLazy from "../01-lazyload/pages/NoLazy";

const LazyLayout = lazy(
  () =>
    import(
      /* webpackChunkName: "LazyLayout" */ "../01-lazyload/layout/LazyLayout"
    )
);

type JSXComponent = () => JSX.Element;
type RouteNameMap = {
  lazyload: {
    isNested: true;
    type: "lazy";
    name: "LazyLayout";
  };
  "no-lazy": {
    isNested: false;
    type: "no-lazy";
    name: "No Lazy";
  };
};
type Route = {
  [Key in keyof RouteNameMap]: {
    to: `/${Key}`;
    path: `/${Key}/${RouteNameMap[Key]["isNested"] extends true ? "*" : ""}`;
    Component: RouteNameMap[Key]["type"] extends "lazy"
      ? LazyExoticComponent<JSXComponent>
      : JSXComponent;
    name: RouteNameMap[Key]["name"];
  };
}[keyof RouteNameMap];

const routes: Route[] = [
  {
    to: "/lazyload",
    path: "/lazyload/*",
    Component: LazyLayout,
    name: "LazyLayout",
  },
  {
    to: "/no-lazy",
    path: "/no-lazy/",
    Component: NoLazy,
    name: "No Lazy",
  },
];

export default routes;
