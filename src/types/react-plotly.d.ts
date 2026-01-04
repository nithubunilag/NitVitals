declare module "react-plotly.js" {
  import * as React from "react";
  import { Layout, Data, Config } from "plotly.js";

  interface PlotProps {
    data: Partial<Data>[];
    layout?: Partial<Layout>;
    config?: Partial<Config>;
    style?: React.CSSProperties;
    className?: string;
    onInitialized?: (figure: any) => void;
    onUpdate?: (figure: any) => void;
    useResizeHandler?: boolean;
  }

  const Plot: React.FC<PlotProps>;
  export default Plot;
}