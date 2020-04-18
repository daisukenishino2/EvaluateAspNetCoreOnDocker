﻿-- DaoT_WorkflowHistory_S1_Insert
-- 2014/7/18 日立 太郎
INSERT INTO 
  [T_WorkflowHistory]
    (
      [WorkflowControlNo],
      [HistoryNo],
      [WfPositionId],
      [WorkflowNo],
      [FromUserId],
      [FromUserInfo],
      [ActionType],
      [ToUserId],
      [ToUserInfo],
      [ToUserPositionTitlesId],
      [NextWfPositionId],
      [NextWorkflowNo],
      [ReserveArea],
      [ReplyDeadline],
      [StartDate],
      [AcceptanceDate],
      [AcceptanceUserId],
      [AcceptanceUserInfo],
      [EndDate]
    )
VALUES
    (
      @WorkflowControlNo,
      @HistoryNo,
      @WfPositionId,
      @WorkflowNo,
      @FromUserId,
      @FromUserInfo,
      @ActionType,
      @ToUserId,
      @ToUserInfo,
      @ToUserPositionTitlesId,
      @NextWfPositionId,
      @NextWorkflowNo,
      @ReserveArea,
      @ReplyDeadline,
      @StartDate,
      @AcceptanceDate,
      @AcceptanceUserId,
      @AcceptanceUserInfo,
      @EndDate
    )