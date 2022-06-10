import { lazy, LazyExoticComponent } from "react";

const LazyPage1 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage1" */ "../01-lazyload/pages/LazyPage1")
);
const LazyPage2 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage2" */ "../01-lazyload/pages/LazyPage2")
);
const LazyPage3 = lazy(
  () =>
    import(/* webpackChunkName: "LazyPage3" */ "../01-lazyload/pages/LazyPage3")
);

type JSXComponent = () => JSX.Element;
type RouteNameMap = {
  lazy1: {
    type: "lazy";
    name: "Lazy 1";
  };
  lazy2: {
    type: "lazy";
    name: "Lazy 2";
  };
  lazy3: {
    type: "lazy";
    name: "Lazy 3";
  };
};
type Route = {
  [Key in keyof RouteNameMap]: {
    to: `/${Key}`;
    path: Key;
    Component: RouteNameMap[Key]["type"] extends "lazy"
      ? LazyExoticComponent<JSXComponent>
      : JSXComponent;
    name: RouteNameMap[Key]["name"];
  };
}[keyof RouteNameMap];

const routes: Route[] = [
  {
    to: "/lazy1",
    path: "lazy1",
    Component: LazyPage1,
    name: "Lazy 1",
  },
  {
    to: "/lazy2",
    path: "lazy2",
    Component: LazyPage2,
    name: "Lazy 2",
  },
  {
    to: "/lazy3",
    path: "lazy3",
    Component: LazyPage3,
    name: "Lazy 3",
  },
];

export default routes;
