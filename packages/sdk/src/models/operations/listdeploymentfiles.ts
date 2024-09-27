/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import * as z from "zod";

export type ListDeploymentFilesRequest = {
  /**
   * The unique deployment identifier
   */
  id: string;
  /**
   * The Team identifier to perform the request on behalf of.
   */
  teamId?: string | undefined;
  /**
   * The Team slug to perform the request on behalf of.
   */
  slug?: string | undefined;
};

/** @internal */
export const ListDeploymentFilesRequest$inboundSchema: z.ZodType<
  ListDeploymentFilesRequest,
  z.ZodTypeDef,
  unknown
> = z.object({
  id: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/** @internal */
export type ListDeploymentFilesRequest$Outbound = {
  id: string;
  teamId?: string | undefined;
  slug?: string | undefined;
};

/** @internal */
export const ListDeploymentFilesRequest$outboundSchema: z.ZodType<
  ListDeploymentFilesRequest$Outbound,
  z.ZodTypeDef,
  ListDeploymentFilesRequest
> = z.object({
  id: z.string(),
  teamId: z.string().optional(),
  slug: z.string().optional(),
});

/**
 * @internal
 * @deprecated This namespace will be removed in future versions. Use schemas and types that are exported directly from this module.
 */
export namespace ListDeploymentFilesRequest$ {
  /** @deprecated use `ListDeploymentFilesRequest$inboundSchema` instead. */
  export const inboundSchema = ListDeploymentFilesRequest$inboundSchema;
  /** @deprecated use `ListDeploymentFilesRequest$outboundSchema` instead. */
  export const outboundSchema = ListDeploymentFilesRequest$outboundSchema;
  /** @deprecated use `ListDeploymentFilesRequest$Outbound` instead. */
  export type Outbound = ListDeploymentFilesRequest$Outbound;
}