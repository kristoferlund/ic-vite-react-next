import { createActorContext } from "@ic-reactor/react";
import {
  backend,
  canisterId,
  idlFactory,
} from "../../backend/declarations/index";

export type BackendActor = typeof backend;

export const { useMethod: useBackend, ActorProvider: BackendProvider } =
  createActorContext<BackendActor>({
    canisterId,
    idlFactory,
  });
