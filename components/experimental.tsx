import { Badge } from "./badge";

export function ExperimentalBadge(props: { className?: string }) {
  return (
    <Badge className={props.className} color="cyan">
      Experimental
    </Badge>
  );
}
