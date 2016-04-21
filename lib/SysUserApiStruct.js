var CShfeFtdcDisseminationField = function() {
  this.SequenceSeries=0;
  this.SequenceNo=0;
};

var CShfeFtdcRspInfoField = function() {
  this.ErrorID=0;
  this.ErrorMsg=" ";
};

var CShfeFtdcCommPhaseField = function() {
  this.TradingDay=" ";
  this.CommPhaseNo=0;
};

var CShfeFtdcExchangeTradingDayField = function() {
  this.TradingDay=" ";
  this.ExchangeID=" ";
};

var CShfeFtdcSettlementSessionField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
};

var CShfeFtdcCurrentTimeField = function() {
  this.CurrDate=" ";
  this.CurrTime=" ";
  this.CurrMillisec=0;
};

var CShfeFtdcReqUserLoginField = function() {
  this.TradingDay=" ";
  this.UserID=" ";
  this.ParticipantID=" ";
  this.Password=" ";
  this.UserProductInfo=" ";
  this.InterfaceProductInfo=" ";
  this.ProtocolInfo=" ";
  this.DataCenterID=0;
};

var CShfeFtdcRspUserLoginField = function() {
  this.TradingDay=" ";
  this.LoginTime=" ";
  this.MaxOrderLocalID=" ";
  this.UserID=" ";
  this.ParticipantID=" ";
  this.TradingSystemName=" ";
  this.DataCenterID=0;
  this.PrivateFlowSize=0;
  this.UserFlowSize=0;
  this.ActionDay=" ";
};

var CShfeFtdcReqUserLogoutField = function() {
  this.UserID=" ";
  this.ParticipantID=" ";
};

var CShfeFtdcRspUserLogoutField = function() {
  this.UserID=" ";
  this.ParticipantID=" ";
};

var CShfeFtdcInputOrderField = function() {
  this.OrderSysID=" ";
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.UserID=" ";
  this.InstrumentID=" ";
  this.OrderPriceType=0;
  this.Direction=0;
  this.CombOffsetFlag=" ";
  this.CombHedgeFlag=" ";
  this.LimitPrice=0;
  this.VolumeTotalOriginal=0;
  this.TimeCondition=0;
  this.GTDDate=" ";
  this.VolumeCondition=0;
  this.MinVolume=0;
  this.ContingentCondition=0;
  this.StopPrice=0;
  this.ForceCloseReason=0;
  this.OrderLocalID=" ";
  this.IsAutoSuspend=0;
  this.BusinessUnit=" ";
  this.BusinessLocalID=0;
};

var CShfeFtdcOrderActionField = function() {
  this.OrderSysID=" ";
  this.OrderLocalID=" ";
  this.ActionFlag=0;
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.UserID=" ";
  this.LimitPrice=0;
  this.VolumeChange=0;
  this.ActionLocalID=" ";
  this.BusinessUnit=" ";
  this.BusinessLocalID=0;
};

var CShfeFtdcOTCOrderField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.OTCOrderSysID=" ";
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.UserID=" ";
  this.InstrumentID=" ";
  this.Direction=0;
  this.OffsetFlag=0;
  this.HedgeFlag=0;
  this.Price=0;
  this.Volume=0;
  this.OtherParticipantID=" ";
  this.OtherClientID=" ";
  this.OtherUserID=" ";
  this.OtherOffsetFlag=0;
  this.OtherHedgeFlag=0;
  this.OTCOrderLocalID=" ";
  this.OTCOrderStatus=0;
  this.InsertTime=" ";
  this.CancelTime=" ";
  this.ClearingPartID=" ";
  this.OtherClearingPartID=" ";
  this.BusinessLocalID=0;
  this.ActionDay=" ";
  this.EfpInstrumentID=" ";
};

var CShfeFtdcOrderSessionField = function() {
  this.FrontID=0;
  this.SessionID=0;
  this.RequestID=0;
};

var CShfeFtdcInputQuoteField = function() {
  this.QuoteSysID=" ";
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.UserID=" ";
  this.Volume=0;
  this.InstrumentID=" ";
  this.QuoteLocalID=" ";
  this.BusinessUnit=" ";
  this.BidCombOffsetFlag=" ";
  this.BidCombHedgeFlag=" ";
  this.BidPrice=0;
  this.AskCombOffsetFlag=" ";
  this.AskCombHedgeFlag=" ";
  this.AskPrice=0;
  this.BusinessLocalID=0;
};

var CShfeFtdcQuoteActionField = function() {
  this.QuoteSysID=" ";
  this.QuoteLocalID=" ";
  this.ActionFlag=0;
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.UserID=" ";
  this.ActionLocalID=" ";
  this.BusinessUnit=" ";
  this.BusinessLocalID=0;
};

var CShfeFtdcInputExecOrderField = function() {
  this.InstrumentID=" ";
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.UserID=" ";
  this.ExecOrderLocalID=" ";
  this.Volume=0;
  this.BusinessUnit=" ";
  this.OffsetFlag=0;
  this.BusinessLocalID=0;
};

var CShfeFtdcExecOrderActionField = function() {
  this.ExecOrderSysID=" ";
  this.ExecOrderLocalID=" ";
  this.ActionFlag=0;
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.UserID=" ";
  this.ActionLocalID=" ";
  this.BusinessUnit=" ";
  this.BusinessLocalID=0;
};

var CShfeFtdcUserLogoutField = function() {
  this.UserID=" ";
  this.ParticipantID=" ";
};

var CShfeFtdcUserPasswordUpdateField = function() {
  this.UserID=" ";
  this.ParticipantID=" ";
  this.OldPassword=" ";
  this.NewPassword=" ";
};

var CShfeFtdcInputCombOrderField = function() {
  this.CombOrderSysID=" ";
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.UserID=" ";
  this.LimitPrice=0;
  this.VolumeTotalOriginal=0;
  this.CombOrderLocalID=" ";
  this.BusinessUnit=" ";
  this.InstrumentID1=" ";
  this.Direction1=0;
  this.LegMultiple1=0;
  this.OffsetFlag1=0;
  this.HedgeFlag1=0;
  this.InstrumentID2=" ";
  this.Direction2=0;
  this.LegMultiple2=0;
  this.OffsetFlag2=0;
  this.HedgeFlag2=0;
  this.InstrumentID3=" ";
  this.Direction3=0;
  this.LegMultiple3=0;
  this.OffsetFlag3=0;
  this.HedgeFlag3=0;
  this.InstrumentID4=" ";
  this.Direction4=0;
  this.LegMultiple4=0;
  this.OffsetFlag4=0;
  this.HedgeFlag4=0;
  this.BusinessLocalID=0;
};

var CShfeFtdcForceUserExitField = function() {
  this.ParticipantID=" ";
  this.UserID=" ";
};

var CShfeFtdcAccountDepositField = function() {
  this.SettlementGroupID=" ";
  this.Account=" ";
  this.Deposit=0;
};

var CShfeFtdcQryOrderField = function() {
  this.PartIDStart=" ";
  this.PartIDEnd=" ";
  this.OrderSysID=" ";
  this.InstrumentID=" ";
  this.ClientID=" ";
  this.UserID=" ";
  this.TimeStart=" ";
  this.TimeEnd=" ";
};

var CShfeFtdcQryQuoteField = function() {
  this.PartIDStart=" ";
  this.PartIDEnd=" ";
  this.QuoteSysID=" ";
  this.ClientID=" ";
  this.InstrumentID=" ";
  this.UserID=" ";
};

var CShfeFtdcQryTradeField = function() {
  this.PartIDStart=" ";
  this.PartIDEnd=" ";
  this.InstIDStart=" ";
  this.InstIDEnd=" ";
  this.TradeID=" ";
  this.ClientID=" ";
  this.UserID=" ";
  this.TimeStart=" ";
  this.TimeEnd=" ";
};

var CShfeFtdcQryMarketDataField = function() {
  this.ProductID=" ";
  this.InstrumentID=" ";
};

var CShfeFtdcQryClientField = function() {
  this.PartIDStart=" ";
  this.PartIDEnd=" ";
  this.ClientIDStart=" ";
  this.ClientIDEnd=" ";
};

var CShfeFtdcQryPartPositionField = function() {
  this.PartIDStart=" ";
  this.PartIDEnd=" ";
  this.InstIDStart=" ";
  this.InstIDEnd=" ";
};

var CShfeFtdcQryClientPositionField = function() {
  this.PartIDStart=" ";
  this.PartIDEnd=" ";
  this.ClientIDStart=" ";
  this.ClientIDEnd=" ";
  this.InstIDStart=" ";
  this.InstIDEnd=" ";
  this.ClientType=0;
};

var CShfeFtdcQryPartAccountField = function() {
  this.PartIDStart=" ";
  this.PartIDEnd=" ";
  this.AccountID=" ";
};

var CShfeFtdcQryInstrumentField = function() {
  this.SettlementGroupID=" ";
  this.ProductGroupID=" ";
  this.ProductID=" ";
  this.InstrumentID=" ";
};

var CShfeFtdcQryInstrumentStatusField = function() {
  this.InstIDStart=" ";
  this.InstIDEnd=" ";
};

var CShfeFtdcQrySGDataSyncStatusField = function() {
  this.SettlementGroupID=" ";
};

var CShfeFtdcQryUserSessionField = function() {
  this.UserIDStart=" ";
  this.UserIDEnd=" ";
};

var CShfeFtdcQryUserField = function() {
  this.UserIDStart=" ";
  this.UserIDEnd=" ";
};

var CShfeFtdcQryBulletinField = function() {
  this.TradingDay=" ";
  this.MarketID=" ";
  this.BulletinID=0;
  this.NewsType=" ";
  this.NewsUrgency=0;
};

var CShfeFtdcQryParticipantField = function() {
  this.PartIDStart=" ";
  this.PartIDEnd=" ";
};

var CShfeFtdcQryHedgeVolumeField = function() {
  this.PartIDStart=" ";
  this.PartIDEnd=" ";
  this.ClientIDStart=" ";
  this.ClientIDEnd=" ";
  this.InstIDStart=" ";
  this.InstIDEnd=" ";
};

var CShfeFtdcQryMBLMarketDataField = function() {
  this.InstIDStart=" ";
  this.InstIDEnd=" ";
  this.Direction=0;
};

var CShfeFtdcQryCreditLimitField = function() {
  this.ParticipantID=" ";
  this.ClearingPartID=" ";
};

var CShfeFtdcQryExecOrderField = function() {
  this.PartIDStart=" ";
  this.PartIDEnd=" ";
  this.ExecOrderSysID=" ";
  this.InstrumentID=" ";
  this.ClientID=" ";
  this.UserID=" ";
  this.TimeStart=" ";
  this.TimeEnd=" ";
};

var CShfeFtdcQryCombOrderField = function() {
  this.PartIDStart=" ";
  this.PartIDEnd=" ";
  this.CombOrderSysID=" ";
  this.ClientID=" ";
  this.UserID=" ";
};

var CShfeFtdcRspPartAccountField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.PreBalance=0;
  this.CurrMargin=0;
  this.CloseProfit=0;
  this.Premium=0;
  this.Deposit=0;
  this.Withdraw=0;
  this.Balance=0;
  this.Available=0;
  this.AccountID=" ";
  this.FrozenMargin=0;
  this.FrozenPremium=0;
  this.BaseReserve=0;
};

var CShfeFtdcRspPartPositionField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.HedgeFlag=0;
  this.PosiDirection=0;
  this.YdPosition=0;
  this.Position=0;
  this.LongFrozen=0;
  this.ShortFrozen=0;
  this.YdLongFrozen=0;
  this.YdShortFrozen=0;
  this.InstrumentID=" ";
  this.ParticipantID=" ";
  this.TradingRole=0;
};

var CShfeFtdcRspClientPositionField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.HedgeFlag=0;
  this.PosiDirection=0;
  this.YdPosition=0;
  this.Position=0;
  this.LongFrozen=0;
  this.ShortFrozen=0;
  this.YdLongFrozen=0;
  this.YdShortFrozen=0;
  this.BuyTradeVolume=0;
  this.SellTradeVolume=0;
  this.PositionCost=0;
  this.YdPositionCost=0;
  this.UseMargin=0;
  this.FrozenMargin=0;
  this.LongFrozenMargin=0;
  this.ShortFrozenMargin=0;
  this.FrozenPremium=0;
  this.InstrumentID=" ";
  this.ParticipantID=" ";
  this.ClientID=" ";
};

var CShfeFtdcRspInstrumentField = function() {
  this.SettlementGroupID=" ";
  this.ProductID=" ";
  this.ProductGroupID=" ";
  this.UnderlyingInstrID=" ";
  this.ProductClass=0;
  this.PositionType=0;
  this.StrikePrice=0;
  this.OptionsType=0;
  this.VolumeMultiple=0;
  this.UnderlyingMultiple=0;
  this.InstrumentID=" ";
  this.InstrumentName=" ";
  this.DeliveryYear=0;
  this.DeliveryMonth=0;
  this.AdvanceMonth=" ";
  this.IsTrading=0;
  this.CreateDate=" ";
  this.OpenDate=" ";
  this.ExpireDate=" ";
  this.StartDelivDate=" ";
  this.EndDelivDate=" ";
  this.BasisPrice=0;
  this.MaxMarketOrderVolume=0;
  this.MinMarketOrderVolume=0;
  this.MaxLimitOrderVolume=0;
  this.MinLimitOrderVolume=0;
  this.PriceTick=0;
  this.AllowDelivPersonOpen=0;
  this.CurrencyID=" ";
};

var CShfeFtdcQryInformationField = function() {
  this.InformationIDStart=0;
  this.InformationIDEnd=0;
};

var CShfeFtdcInformationField = function() {
  this.InformationID=0;
  this.SequenceNo=0;
  this.Content=" ";
  this.ContentLength=0;
  this.IsAccomplished=0;
};

var CShfeFtdcCreditLimitField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.PreBalance=0;
  this.CurrMargin=0;
  this.CloseProfit=0;
  this.Premium=0;
  this.Deposit=0;
  this.Withdraw=0;
  this.Balance=0;
  this.Available=0;
  this.ParticipantID=" ";
  this.ClearingPartID=" ";
  this.FrozenMargin=0;
  this.FrozenPremium=0;
};

var CShfeFtdcRspClientField = function() {
  this.ClientID=" ";
  this.ClientName=" ";
  this.IdentifiedCardType=" ";
  this.UseLess=" ";
  this.TradingRole=0;
  this.ClientType=0;
  this.IsActive=0;
  this.ParticipantID=" ";
  this.IdentifiedCardNo=" ";
};

var CShfeFtdcFlowMessageCancelField = function() {
  this.SequenceSeries=0;
  this.TradingDay=" ";
  this.DataCenterID=0;
  this.StartSequenceNo=0;
  this.EndSequenceNo=0;
};

var CShfeFtdcQryExchangeRateField = function() {
  this.CurrencyID=" ";
};

var CShfeFtdcRspExchangeRateField = function() {
  this.TradingDay=" ";
  this.CurrencyID=" ";
  this.RateUnit=0;
  this.RatePrice=0;
};

var CShfeFtdcParticipantField = function() {
  this.ParticipantID=" ";
  this.ParticipantName=" ";
  this.ParticipantAbbr=" ";
  this.MemberType=0;
  this.IsActive=0;
};

var CShfeFtdcUserField = function() {
  this.ParticipantID=" ";
  this.UserID=" ";
  this.UserType=0;
  this.Password=" ";
  this.IsActive=0;
};

var CShfeFtdcClientField = function() {
  this.ClientID=" ";
  this.ClientName=" ";
  this.IdentifiedCardType=" ";
  this.IdentifiedCardNo=" ";
  this.TradingRole=0;
  this.ClientType=0;
  this.IsActive=0;
};

var CShfeFtdcUserSessionField = function() {
  this.FrontID=0;
  this.UserID=" ";
  this.UserType=0;
  this.SessionID=0;
  this.LoginTime=" ";
  this.ParticipantID=" ";
  this.IPAddress=" ";
  this.UserProductInfo=" ";
  this.InterfaceProductInfo=" ";
  this.ProtocolInfo=" ";
  this.SessionType=0;
};

var CShfeFtdcProductGroupField = function() {
  this.SettlementGroupID=" ";
  this.ProductGroupID=" ";
  this.ProductGroupName=" ";
  this.CommodityID=" ";
};

var CShfeFtdcProductField = function() {
  this.SettlementGroupID=" ";
  this.ProductID=" ";
  this.ProductGroupID=" ";
  this.ProductName=" ";
  this.ProductClass=0;
};

var CShfeFtdcInstrumentField = function() {
  this.SettlementGroupID=" ";
  this.ProductID=" ";
  this.ProductGroupID=" ";
  this.UnderlyingInstrID=" ";
  this.ProductClass=0;
  this.PositionType=0;
  this.StrikePrice=0;
  this.OptionsType=0;
  this.VolumeMultiple=0;
  this.UnderlyingMultiple=0;
  this.InstrumentID=" ";
  this.InstrumentName=" ";
  this.DeliveryYear=0;
  this.DeliveryMonth=0;
  this.AdvanceMonth=" ";
  this.IsTrading=0;
  this.CurrencyID=" ";
};

var CShfeFtdcCombinationLegField = function() {
  this.SettlementGroupID=" ";
  this.CombInstrumentID=" ";
  this.LegID=0;
  this.LegInstrumentID=" ";
  this.Direction=0;
  this.LegMultiple=0;
  this.ImplyLevel=0;
};

var CShfeFtdcAccountInfoField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.PreBalance=0;
  this.CurrMargin=0;
  this.CloseProfit=0;
  this.Premium=0;
  this.Deposit=0;
  this.Withdraw=0;
  this.Balance=0;
  this.Available=0;
  this.DateAccountOpen=" ";
  this.PreDate=" ";
  this.PreSettlementID=0;
  this.PreMargin=0;
  this.FuturesMargin=0;
  this.OptionsMargin=0;
  this.PositionProfit=0;
  this.Profit=0;
  this.Interest=0;
  this.Fee=0;
  this.TotalCollateral=0;
  this.CollateralForMargin=0;
  this.PreAccmulateInterest=0;
  this.AccumulateInterest=0;
  this.AccumulateFee=0;
  this.ForzenDeposit=0;
  this.AccountStatus=0;
  this.AccountID=" ";
};

var CShfeFtdcPartPositionField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.HedgeFlag=0;
  this.PosiDirection=0;
  this.YdPosition=0;
  this.Position=0;
  this.LongFrozen=0;
  this.ShortFrozen=0;
  this.YdLongFrozen=0;
  this.YdShortFrozen=0;
  this.InstrumentID=" ";
  this.ParticipantID=" ";
  this.TradingRole=0;
};

var CShfeFtdcClientPositionField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.HedgeFlag=0;
  this.PosiDirection=0;
  this.YdPosition=0;
  this.Position=0;
  this.LongFrozen=0;
  this.ShortFrozen=0;
  this.YdLongFrozen=0;
  this.YdShortFrozen=0;
  this.BuyTradeVolume=0;
  this.SellTradeVolume=0;
  this.PositionCost=0;
  this.YdPositionCost=0;
  this.UseMargin=0;
  this.FrozenMargin=0;
  this.LongFrozenMargin=0;
  this.ShortFrozenMargin=0;
  this.FrozenPremium=0;
  this.InstrumentID=" ";
  this.ParticipantID=" ";
  this.ClientID=" ";
};

var CShfeFtdcHedgeVolumeField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.InstrumentID=" ";
  this.LongVolumeOriginal=0;
  this.ShortVolumeOriginal=0;
  this.LongVolume=0;
  this.ShortVolume=0;
};

var CShfeFtdcMarketDataField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.LastPrice=0;
  this.PreSettlementPrice=0;
  this.PreClosePrice=0;
  this.PreOpenInterest=0;
  this.OpenPrice=0;
  this.HighestPrice=0;
  this.LowestPrice=0;
  this.Volume=0;
  this.Turnover=0;
  this.OpenInterest=0;
  this.ClosePrice=0;
  this.SettlementPrice=0;
  this.UpperLimitPrice=0;
  this.LowerLimitPrice=0;
  this.PreDelta=0;
  this.CurrDelta=0;
  this.UpdateTime=" ";
  this.UpdateMillisec=0;
  this.InstrumentID=" ";
  this.ActionDay=" ";
};

var CShfeFtdcDepthMarketDataField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.LastPrice=0;
  this.PreSettlementPrice=0;
  this.PreClosePrice=0;
  this.PreOpenInterest=0;
  this.OpenPrice=0;
  this.HighestPrice=0;
  this.LowestPrice=0;
  this.Volume=0;
  this.Turnover=0;
  this.OpenInterest=0;
  this.ClosePrice=0;
  this.SettlementPrice=0;
  this.UpperLimitPrice=0;
  this.LowerLimitPrice=0;
  this.PreDelta=0;
  this.CurrDelta=0;
  this.UpdateTime=" ";
  this.UpdateMillisec=0;
  this.InstrumentID=" ";
  this.BidPrice1=0;
  this.BidVolume1=0;
  this.AskPrice1=0;
  this.AskVolume1=0;
  this.BidPrice2=0;
  this.BidVolume2=0;
  this.AskPrice2=0;
  this.AskVolume2=0;
  this.BidPrice3=0;
  this.BidVolume3=0;
  this.AskPrice3=0;
  this.AskVolume3=0;
  this.BidPrice4=0;
  this.BidVolume4=0;
  this.AskPrice4=0;
  this.AskVolume4=0;
  this.BidPrice5=0;
  this.BidVolume5=0;
  this.AskPrice5=0;
  this.AskVolume5=0;
  this.ActionDay=" ";
};

var CShfeFtdcMBLMarketDataField = function() {
  this.InstrumentID=" ";
  this.Direction=0;
  this.Price=0;
  this.Volume=0;
};

var CShfeFtdcAliasDefineField = function() {
  this.StartPos=0;
  this.Alias=" ";
  this.OriginalText=" ";
};

var CShfeFtdcMarketDataBaseField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.PreSettlementPrice=0;
  this.PreClosePrice=0;
  this.PreOpenInterest=0;
  this.PreDelta=0;
};

var CShfeFtdcMarketDataStaticField = function() {
  this.OpenPrice=0;
  this.HighestPrice=0;
  this.LowestPrice=0;
  this.ClosePrice=0;
  this.UpperLimitPrice=0;
  this.LowerLimitPrice=0;
  this.SettlementPrice=0;
  this.CurrDelta=0;
};

var CShfeFtdcMarketDataLastMatchField = function() {
  this.LastPrice=0;
  this.Volume=0;
  this.Turnover=0;
  this.OpenInterest=0;
};

var CShfeFtdcMarketDataBestPriceField = function() {
  this.BidPrice1=0;
  this.BidVolume1=0;
  this.AskPrice1=0;
  this.AskVolume1=0;
};

var CShfeFtdcMarketDataBid23Field = function() {
  this.BidPrice2=0;
  this.BidVolume2=0;
  this.BidPrice3=0;
  this.BidVolume3=0;
};

var CShfeFtdcMarketDataAsk23Field = function() {
  this.AskPrice2=0;
  this.AskVolume2=0;
  this.AskPrice3=0;
  this.AskVolume3=0;
};

var CShfeFtdcMarketDataBid45Field = function() {
  this.BidPrice4=0;
  this.BidVolume4=0;
  this.BidPrice5=0;
  this.BidVolume5=0;
};

var CShfeFtdcMarketDataAsk45Field = function() {
  this.AskPrice4=0;
  this.AskVolume4=0;
  this.AskPrice5=0;
  this.AskVolume5=0;
};

var CShfeFtdcMarketDataUpdateTimeField = function() {
  this.InstrumentID=" ";
  this.UpdateTime=" ";
  this.UpdateMillisec=0;
  this.ActionDay=" ";
};

var CShfeFtdcQuoteField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.QuoteSysID=" ";
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.UserID=" ";
  this.Volume=0;
  this.InstrumentID=" ";
  this.QuoteLocalID=" ";
  this.BusinessUnit=" ";
  this.BidCombOffsetFlag=" ";
  this.BidCombHedgeFlag=" ";
  this.BidPrice=0;
  this.AskCombOffsetFlag=" ";
  this.AskCombHedgeFlag=" ";
  this.AskPrice=0;
  this.InsertTime=" ";
  this.CancelTime=" ";
  this.TradeTime=" ";
  this.BidOrderSysID=" ";
  this.AskOrderSysID=" ";
  this.ClearingPartID=" ";
  this.BusinessLocalID=0;
  this.ActionDay=" ";
};

var CShfeFtdcTradeField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.TradeID=" ";
  this.Direction=0;
  this.OrderSysID=" ";
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.TradingRole=0;
  this.AccountID=" ";
  this.InstrumentID=" ";
  this.OffsetFlag=0;
  this.HedgeFlag=0;
  this.Price=0;
  this.Volume=0;
  this.TradeTime=" ";
  this.TradeType=0;
  this.PriceSource=0;
  this.UserID=" ";
  this.OrderLocalID=" ";
  this.ClearingPartID=" ";
  this.BusinessUnit=" ";
  this.BusinessLocalID=0;
  this.ActionDay=" ";
};

var CShfeFtdcOrderField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.OrderSysID=" ";
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.UserID=" ";
  this.InstrumentID=" ";
  this.OrderPriceType=0;
  this.Direction=0;
  this.CombOffsetFlag=" ";
  this.CombHedgeFlag=" ";
  this.LimitPrice=0;
  this.VolumeTotalOriginal=0;
  this.TimeCondition=0;
  this.GTDDate=" ";
  this.VolumeCondition=0;
  this.MinVolume=0;
  this.ContingentCondition=0;
  this.StopPrice=0;
  this.ForceCloseReason=0;
  this.OrderLocalID=" ";
  this.IsAutoSuspend=0;
  this.OrderSource=0;
  this.OrderStatus=0;
  this.OrderType=0;
  this.VolumeTraded=0;
  this.VolumeTotal=0;
  this.InsertDate=" ";
  this.InsertTime=" ";
  this.ActiveTime=" ";
  this.SuspendTime=" ";
  this.UpdateTime=" ";
  this.CancelTime=" ";
  this.ActiveUserID=" ";
  this.Priority=0;
  this.TimeSortID=0;
  this.ClearingPartID=" ";
  this.BusinessUnit=" ";
  this.BusinessLocalID=0;
  this.ActionDay=" ";
};

var CShfeFtdcExecOrderField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.InstrumentID=" ";
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.UserID=" ";
  this.ExecOrderLocalID=" ";
  this.Volume=0;
  this.BusinessUnit=" ";
  this.OffsetFlag=0;
  this.ExecOrderSysID=" ";
  this.InsertDate=" ";
  this.InsertTime=" ";
  this.CancelTime=" ";
  this.ExecResult=0;
  this.ClearingPartID=" ";
  this.BusinessLocalID=0;
  this.ActionDay=" ";
};

var CShfeFtdcCombOrderField = function() {
  this.TradingDay=" ";
  this.SettlementGroupID=" ";
  this.SettlementID=0;
  this.CombOrderSysID=" ";
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.UserID=" ";
  this.LimitPrice=0;
  this.VolumeTotalOriginal=0;
  this.CombOrderLocalID=" ";
  this.BusinessUnit=" ";
  this.InstrumentID1=" ";
  this.Direction1=0;
  this.LegMultiple1=0;
  this.OffsetFlag1=0;
  this.HedgeFlag1=0;
  this.InstrumentID2=" ";
  this.Direction2=0;
  this.LegMultiple2=0;
  this.OffsetFlag2=0;
  this.HedgeFlag2=0;
  this.InstrumentID3=" ";
  this.Direction3=0;
  this.LegMultiple3=0;
  this.OffsetFlag3=0;
  this.HedgeFlag3=0;
  this.InstrumentID4=" ";
  this.Direction4=0;
  this.LegMultiple4=0;
  this.OffsetFlag4=0;
  this.HedgeFlag4=0;
  this.OrderSource=0;
  this.VolumeTraded=0;
  this.VolumeTotal=0;
  this.InsertDate=" ";
  this.InsertTime=" ";
  this.ClearingPartID=" ";
  this.BusinessLocalID=0;
  this.ActionDay=" ";
};

var CShfeFtdcAdminOrderField = function() {
  this.InstrumentID=" ";
  this.AdminOrderCommand=0;
  this.ClearingPartID=" ";
  this.ParticipantID=" ";
  this.Amount=0;
  this.SettlementGroupID=" ";
};

var CShfeFtdcInputAdminOrderField = function() {
  this.InstrumentID=" ";
  this.AdminOrderCommand=0;
  this.ClearingPartID=" ";
  this.ParticipantID=" ";
  this.Amount=0;
  this.SettlementGroupID=" ";
};

var CShfeFtdcBulletinField = function() {
  this.TradingDay=" ";
  this.BulletinID=0;
  this.SequenceNo=0;
  this.NewsType=" ";
  this.NewsUrgency=0;
  this.SendTime=" ";
  this.Abstract=" ";
  this.ComeFrom=" ";
  this.Content=" ";
  this.URLLink=" ";
  this.MarketID=" ";
};

var CShfeFtdcExchangeDataSyncStatusField = function() {
  this.TradingDay=" ";
  this.ExchangeID=" ";
  this.ExchangeDataSyncStatus=0;
};

var CShfeFtdcSGDataSyncStatusField = function() {
  this.SettlementGroupID=" ";
  this.TradingDay=" ";
  this.SettlementID=0;
  this.SGDataSyncStatus=0;
};

var CShfeFtdcInstrumentStatusField = function() {
  this.SettlementGroupID=" ";
  this.InstrumentID=" ";
  this.InstrumentStatus=0;
  this.TradingSegmentSN=0;
  this.EnterTime=" ";
  this.EnterReason=0;
  this.EnterDate=" ";
};

var CShfeFtdcRTTMeasureField = function() {
  this.RTT=0;
};

var CShfeFtdcQryClientPositionV1Field = function() {
  this.PartIDStart=" ";
  this.PartIDEnd=" ";
  this.ClientIDStart=" ";
  this.ClientIDEnd=" ";
  this.InstIDStart=" ";
  this.InstIDEnd=" ";
};

var CShfeFtdcUserCommFluxControlField = function() {
  this.MaxTradeCommFlux=0;
  this.MaxTradeOnWayCommFlux=0;
  this.MaxQueryCommFlux=0;
  this.MaxQueryOnWayCommFlux=0;
};

var CShfeFtdcLoopMeasureField = function() {
  this.UserID=" ";
  this.SessionType=0;
  this.MeasureSeq=0;
  this.FrontID=0;
  this.SessionID=0;
};

var CShfeFtdcNodeMeasureField = function() {
  this.NodeID=" ";
  this.PeriodID=0;
  this.Sec=0;
  this.Usec=0;
};

var CShfeFtdcMDProxyField = function() {
  this.ProxyID=0;
  this.UpperProxySessionID=0;
  this.CurrProxySessionID=0;
  this.IPAddress=" ";
  this.RequestID=0;
  this.Depth=0;
  this.SessionStatus=0;
  this.DeletedSessionID=0;
};

var CShfeFtdcReqQryTopCpuInfoField = function() {
  this.HostName=" ";
  this.CPU=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.KeepAlive=0;
};

var CShfeFtdcRspQryTopCpuInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.CPU=" ";
  this.LOAD=0;
  this.USER=0;
  this.NICE=0;
  this.SYS=0;
  this.IDLE=0;
  this.BLOCK=0;
  this.SWAIT=0;
  this.INTR=0;
  this.SSYS=0;
};

var CShfeFtdcRtnTopCpuInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.CPU=" ";
  this.LOAD=0;
  this.USER=0;
  this.NICE=0;
  this.SYS=0;
  this.IDLE=0;
  this.BLOCK=0;
  this.SWAIT=0;
  this.INTR=0;
  this.SSYS=0;
};

var CShfeFtdcReqQryTopMemInfoField = function() {
  this.HostName=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.KeepAlive=0;
};

var CShfeFtdcRspQryTopMemInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.TOTALREAL=0;
  this.ACTIVEREAL=0;
  this.TOTALVIRTUAL=0;
  this.ACTIVEVIRTUAL=0;
  this.FREE=0;
};

var CShfeFtdcRtnTopMemInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.TOTALREAL=0;
  this.ACTIVEREAL=0;
  this.TOTALVIRTUAL=0;
  this.ACTIVEVIRTUAL=0;
  this.FREE=0;
};

var CShfeFtdcReqQryTopProcessInfoField = function() {
  this.HostName=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.KeepAlive=0;
};

var CShfeFtdcRspQryTopProcessInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.CPU=" ";
  this.TTY=" ";
  this.PID=0;
  this.USERNAME=" ";
  this.PRI=0;
  this.NI=0;
  this.SIZE=0;
  this.RES=0;
  this.STATE=" ";
  this.TIME=" ";
  this.pWCPU=0;
  this.pCPU=0;
  this.COMMAND=" ";
};

var CShfeFtdcRtnTopProcessInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.CPU=" ";
  this.TTY=" ";
  this.PID=0;
  this.USERNAME=" ";
  this.PRI=0;
  this.NI=0;
  this.SIZE=0;
  this.RES=0;
  this.STATE=" ";
  this.TIME=" ";
  this.pWCPU=0;
  this.pCPU=0;
  this.COMMAND=" ";
};

var CShfeFtdcReqQryFileSystemInfoField = function() {
  this.HostName=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.KeepAlive=0;
};

var CShfeFtdcRspQryFileSystemInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.FILESYSTEM=" ";
  this.SIZE=0;
  this.USED=0;
  this.AVAIL=0;
  this.pUSERD=0;
  this.ISIZE=0;
  this.IUSED=0;
  this.IFREE=0;
  this.pIUSED=0;
  this.MountedOn=" ";
};

var CShfeFtdcRtnFileSystemInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.FILESYSTEM=" ";
  this.SIZE=0;
  this.USED=0;
  this.AVAIL=0;
  this.pUSERD=0;
  this.ISIZE=0;
  this.IUSED=0;
  this.IFREE=0;
  this.pIUSED=0;
  this.MountedOn=" ";
};

var CShfeFtdcReqQryNetworkInfoField = function() {
  this.HostName=" ";
  this.LANNAME=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.KeepAlive=0;
};

var CShfeFtdcRspQryNetworkInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.LANNAME=" ";
  this.LANSTATUS=" ";
  this.IPADDRESS=" ";
  this.RECVBYTES=0;
  this.RECVPACKETS=0;
  this.RECVERRORPACKETS=0;
  this.RECVDROPPACKETS=0;
  this.SENDBYTES=0;
  this.SENDPACKETS=0;
  this.SENDERRORPACKETS=0;
  this.SENDDROPPACKETS=0;
};

var CShfeFtdcRtnNetworkInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.LANNAME=" ";
  this.LANSTATUS=" ";
  this.IPADDRESS=" ";
  this.RECVBYTES=0;
  this.RECVPACKETS=0;
  this.RECVERRORPACKETS=0;
  this.RECVDROPPACKETS=0;
  this.SENDBYTES=0;
  this.SENDPACKETS=0;
  this.SENDERRORPACKETS=0;
  this.SENDDROPPACKETS=0;
};

var CShfeFtdcReqQryHostEnvField = function() {
  this.HostName=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.KeepAlive=0;
};

var CShfeFtdcRspQryHostEnvCommonField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.HostModel=" ";
  this.MainMemory=0;
  this.CPUVendor=" ";
  this.CPUModel=" ";
  this.CPUMHz=" ";
  this.CPUCache=" ";
  this.CPUCores=0;
  this.Processors=0;
  this.OsMode=0;
};

var CShfeFtdcRspQryHostEnvLanField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.LanHardwareID=" ";
  this.LanHardwareValue=" ";
};

var CShfeFtdcRspQryHostEnvStorageField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.StorageDev=" ";
  this.HWPath=" ";
  this.Interface=" ";
};

var CShfeFtdcRspQryHostEnvIOField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.IoClass=" ";
  this.H_WPath=" ";
  this.IoDriver=" ";
  this.IoDescription=" ";
};

var CShfeFtdcRspQryHostEnvFSField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.LVMDeviceFile=" ";
  this.MountPoint=" ";
  this.FSsize=0;
  this.FSType=" ";
};

var CShfeFtdcRspQryHostEnvSwapField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.type=" ";
  this.size=0;
  this.priority=0;
  this.location=" ";
};

var CShfeFtdcRspQryHostEnvLanCfgField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.LanName=" ";
  this.IpAddress=" ";
  this.IpMask=" ";
};

var CShfeFtdcReqQryClientLoginField = function() {
  this.UserName=" ";
  this.PassWord=" ";
};

var CShfeFtdcRspQryClientLoginField = function() {
  this.UserName=" ";
  this.Privalage=" ";
};

var CShfeFtdcReqQryMonitorObjectField = function() {
  this.ObjectID=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.KeepAlive=0;
};

var CShfeFtdcRspQryMonitorObjectField = function() {
  this.ObjectID=" ";
  this.ObjectName=" ";
  this.WarningActive=0;
};

var CShfeFtdcRtnMonitorObjectField = function() {
  this.ObjectID=" ";
  this.ObjectName=" ";
  this.WarningActive=0;
};

var CShfeFtdcReqQryObjectRationalField = function() {
  this.ObjectID=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.KeepAlive=0;
};

var CShfeFtdcRspQryObjectRationalField = function() {
  this.ObjectID=" ";
  this.HostObjectID=" ";
};

var CShfeFtdcRtnObjectRationalField = function() {
  this.ObjectID=" ";
  this.HostObjectID=" ";
};

var CShfeFtdcReqQrySyslogInfoField = function() {
  this.FileName=" ";
  this.subFileName=" ";
};

var CShfeFtdcRspQrySyslogInfoField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.ObjectID=" ";
  this.AttrType=" ";
  this.ContLen=0;
  this.FileContent=" ";
};

var CShfeFtdcRtnSyslogInfoField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.ObjectID=" ";
  this.AttrType=" ";
  this.ContLen=0;
  this.FileContent=" ";
};

var CShfeFtdcReqQrySubscriberField = function() {
  this.ObjectID=" ";
  this.ObjectNum=0;
  this.KeepAlive=0;
  this.MonDate=" ";
  this.MonTime=" ";
};

var CShfeFtdcRspQrySubscriberField = function() {
  this.ErrorID=0;
  this.ErrorMsg=" ";
  this.ObjectID=" ";
};

var CShfeFtdcRtnSubscriberField = function() {
  this.ErrorID=0;
  this.ErrorMsg=" ";
  this.ObjectID=" ";
};

var CShfeFtdcReqQryOidRelationField = function() {
  this.ObjectID=" ";
};

var CShfeFtdcRspQryOidRelationField = function() {
  this.ObjectID=" ";
  this.HoldObjectID=" ";
};

var CShfeFtdcRtnOidRelationField = function() {
  this.ObjectID=" ";
  this.HoldObjectID=" ";
};

var CShfeFtdcReqQryUserInfoField = function() {
  this.ObjectID=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryUserInfoField = function() {
  this.USERNAME=" ";
  this.USERID=0;
  this.GROUPNAME=" ";
  this.GROUPID=0;
  this.HOMEPATH=" ";
  this.SHELL=" ";
  this.ObjectID=" ";
  this.MonTime=" ";
  this.MonDate=" ";
};

var CShfeFtdcRtnUserInfoField = function() {
  this.USERNAME=" ";
  this.USERID=0;
  this.GROUPNAME=" ";
  this.GROUPID=0;
  this.HOMEPATH=" ";
  this.SHELL=" ";
  this.ObjectID=" ";
  this.MonTime=" ";
  this.MonDate=" ";
};

var CShfeFtdcReqQryOnlineUserInfoField = function() {
  this.ObjectID=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryOnlineUserInfoField = function() {
  this.USERNAME=" ";
  this.TIME=" ";
  this.TTY=" ";
  this.IP=" ";
  this.CONNECTIME=" ";
  this.PID=0;
  this.ObjectID=" ";
  this.MonTime=" ";
  this.MonDate=" ";
};

var CShfeFtdcRtnOnlineUserInfoField = function() {
  this.USERNAME=" ";
  this.TIME=" ";
  this.TTY=" ";
  this.IP=" ";
  this.CONNECTIME=" ";
  this.PID=0;
  this.ObjectID=" ";
  this.MonTime=" ";
  this.MonDate=" ";
};

var CShfeFtdcSysWarningEventField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.OccurDate=" ";
  this.OccurTime=" ";
  this.EvendID=0;
  this.ObjectID=" ";
  this.IPAddress=" ";
  this.EventName=" ";
  this.EventNum=0;
  this.EventType=0;
  this.EventDes=" ";
  this.ProcessFlag=" ";
  this.WarningLevel=" ";
  this.EventDealDes=" ";
  this.FullEventName=" ";
};

var CShfeFtdcReqQryWarningEventField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.WarningLevel=" ";
  this.EventType=0;
  this.ObjectID=" ";
  this.EventName=" ";
};

var CShfeFtdcRspQryWarningEventField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.OccurDate=" ";
  this.OccurTime=" ";
  this.EvendID=0;
  this.ObjectID=" ";
  this.IPAddress=" ";
  this.EventName=" ";
  this.EventNum=0;
  this.EventType=0;
  this.EventDes=" ";
  this.ProcessFlag=" ";
  this.WarningLevel=" ";
  this.EventDealDes=" ";
  this.FullEventName=" ";
};

var CShfeFtdcRtnWarningEventField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.OccurDate=" ";
  this.OccurTime=" ";
  this.EvendID=0;
  this.ObjectID=" ";
  this.IPAddress=" ";
  this.EventName=" ";
  this.EventNum=0;
  this.EventType=0;
  this.EventDes=" ";
  this.ProcessFlag=" ";
  this.WarningLevel=" ";
  this.EventDealDes=" ";
  this.FullEventName=" ";
  this.EventCount=0;
};

var CShfeFtdcReqQryKeyFileInfoField = function() {
  this.FileName=" ";
  this.PathName=" ";
};

var CShfeFtdcReqQryHostMonitorCfgField = function() {
  this.MonitorType=" ";
  this.PathName=" ";
  this.Interval=0;
};

var CShfeFtdcReqQryAppMonitorCfgField = function() {
  this.MonitorType=" ";
  this.FSPosition=" ";
};

var CShfeFtdcReqQryCPUUsageField = function() {
  this.ObjectID=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryCPUUsageField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.CPUUsage=0;
};

var CShfeFtdcRtnCPUUsageField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.CPUUsage=0;
};

var CShfeFtdcReqQryMemoryUsageField = function() {
  this.ObjectID=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryMemoryUsageField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.MemoryUsage=0;
};

var CShfeFtdcRtnMemoryUsageField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.MemoryUsage=0;
};

var CShfeFtdcReqQryDiskUsageField = function() {
  this.ObjectID=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryDiskUsageField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.DiskUsage=0;
};

var CShfeFtdcRtnDiskUsageField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.DiskUsage=0;
};

var CShfeFtdcReqQryObjectAttrField = function() {
  this.ObjectID=" ";
  this.AttrType=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryObjectAttrField = function() {
  this.ObjectID=" ";
  this.AttrType=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.ValueType=0;
  this.AttrValue=" ";
};

var CShfeFtdcRtnObjectAttrField = function() {
  this.ObjectID=" ";
  this.AttrType=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.ValueType=0;
  this.AttrValue=" ";
};

var CShfeFtdcReqQryHostConfigField = function() {
  this.CfgType=" ";
  this.CfgDataCenter=" ";
  this.CfgName=" ";
  this.CfgLocation=" ";
  this.CfgHostName=" ";
  this.CfgAttend=" ";
};

var CShfeFtdcReqQryInvalidateOrderField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryInvalidateOrderField = function() {
  this.OrderSysID=" ";
  this.OrderLocalID=" ";
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.ErrorMsg=" ";
  this.ParticipantID=" ";
  this.UserID=" ";
  this.ClientID=" ";
  this.InstrumentID=" ";
  this.Direction=0;
  this.CombOffsetFlag=" ";
  this.CombHedgeFlag=" ";
  this.LimitPrice=0;
  this.VolumeTotalOriginal=0;
  this.TimeCondition=0;
  this.VolumeCondition=0;
  this.MinVolume=0;
};

var CShfeFtdcRtnInvalidateOrderField = function() {
  this.OrderSysID=" ";
  this.OrderLocalID=" ";
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.ErrorMsg=" ";
  this.ParticipantID=" ";
  this.UserID=" ";
  this.ClientID=" ";
  this.InstrumentID=" ";
  this.Direction=0;
  this.CombOffsetFlag=" ";
  this.CombHedgeFlag=" ";
  this.LimitPrice=0;
  this.VolumeTotalOriginal=0;
  this.TimeCondition=0;
  this.VolumeCondition=0;
  this.MinVolume=0;
};

var CShfeFtdcReqQryOrderStatusField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryOrderStatusField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.OrderSysID=" ";
  this.OrderLocalID=" ";
  this.InsertDate=" ";
  this.InsertTime=" ";
  this.OrderStatus=0;
  this.ParticipantID=" ";
  this.UserID=" ";
  this.ClientID=" ";
  this.InstrumentID=" ";
  this.Direction=0;
  this.CombOffsetFlag=" ";
  this.CombHedgeFlag=" ";
  this.LimitPrice=0;
  this.VolumeTotalOriginal=0;
  this.TimeCondition=0;
  this.VolumeCondition=0;
  this.MinVolume=0;
};

var CShfeFtdcRtnOrderStatusField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.OrderSysID=" ";
  this.OrderLocalID=" ";
  this.InsertDate=" ";
  this.InsertTime=" ";
  this.OrderStatus=0;
  this.ParticipantID=" ";
  this.UserID=" ";
  this.ClientID=" ";
  this.InstrumentID=" ";
  this.Direction=0;
  this.CombOffsetFlag=" ";
  this.CombHedgeFlag=" ";
  this.LimitPrice=0;
  this.VolumeTotalOriginal=0;
  this.TimeCondition=0;
  this.VolumeCondition=0;
  this.MinVolume=0;
};

var CShfeFtdcReqQryBargainOrderField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryBargainOrderField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.TradeID=" ";
  this.OrderSysID=" ";
  this.InstrumentID=" ";
  this.Price=0;
  this.Volume=0;
  this.ParticipantID=" ";
  this.UserID=" ";
  this.ClientID=" ";
};

var CShfeFtdcRtnBargainOrderField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.TradeID=" ";
  this.OrderSysID=" ";
  this.InstrumentID=" ";
  this.Price=0;
  this.Volume=0;
  this.ParticipantID=" ";
  this.UserID=" ";
  this.ClientID=" ";
};

var CShfeFtdcReqQryInstPropertyField = function() {
  this.StartDate=" ";
  this.EndDate=" ";
};

var CShfeFtdcRspQryInstPropertyField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.SettlementGroupID=" ";
  this.UnderlyingInstrID=" ";
  this.ProductClass=0;
  this.PositionType=0;
  this.VolumeMultiple=0;
  this.UnderlyingMultiple=0;
  this.InstLifePhase=0;
  this.OpenDate=" ";
  this.ExpireDate=" ";
  this.StartDelivDate=" ";
  this.EndDelivDate=" ";
  this.BasisPrice=0;
  this.MaxMarketOrderVolume=0;
  this.MinMarketOrderVolume=0;
  this.MaxLimitOrderVolume=0;
  this.MinLimitOrderVolume=0;
  this.PriceTick=0;
  this.AllowDelivPersonOpen=0;
};

var CShfeFtdcRtnInstPropertyField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.SettlementGroupID=" ";
  this.UnderlyingInstrID=" ";
  this.ProductClass=0;
  this.PositionType=0;
  this.VolumeMultiple=0;
  this.UnderlyingMultiple=0;
  this.InstLifePhase=0;
  this.OpenDate=" ";
  this.ExpireDate=" ";
  this.StartDelivDate=" ";
  this.EndDelivDate=" ";
  this.BasisPrice=0;
  this.MaxMarketOrderVolume=0;
  this.MinMarketOrderVolume=0;
  this.MaxLimitOrderVolume=0;
  this.MinLimitOrderVolume=0;
  this.PriceTick=0;
  this.AllowDelivPersonOpen=0;
};

var CShfeFtdcReqQryMarginRateField = function() {
  this.StartDate=" ";
  this.EndDate=" ";
};

var CShfeFtdcRspQryMarginRateField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ParticipantID=" ";
  this.TradingRole=0;
  this.HedgeFlag=0;
  this.ValueMode=0;
  this.LongMarginRatio=0;
  this.ShortMarginRatio=0;
};

var CShfeFtdcRtnMarginRateField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ParticipantID=" ";
  this.TradingRole=0;
  this.HedgeFlag=0;
  this.ValueMode=0;
  this.LongMarginRatio=0;
  this.ShortMarginRatio=0;
};

var CShfeFtdcReqQryPriceLimitField = function() {
  this.StartDate=" ";
  this.EndDate=" ";
};

var CShfeFtdcRspQryPriceLimitField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ValueMode=0;
  this.RoundingMode=0;
  this.UpperLimitPrice=0;
  this.LowerLimitPrice=0;
};

var CShfeFtdcRtnPriceLimitField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ValueMode=0;
  this.RoundingMode=0;
  this.UpperLimitPrice=0;
  this.LowerLimitPrice=0;
};

var CShfeFtdcReqQryPartPosiLimitField = function() {
  this.StartDate=" ";
  this.EndDate=" ";
};

var CShfeFtdcRspQryPartPosiLimitField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ParticipantID=" ";
  this.TradingRole=0;
  this.StartTotalPosition=0;
  this.ValueMode=0;
  this.LongPosLimit=0;
  this.ShortPosLimit=0;
  this.UpperLimitPrice=0;
  this.LowerLimitPrice=0;
};

var CShfeFtdcRtnPartPosiLimitField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ParticipantID=" ";
  this.TradingRole=0;
  this.StartTotalPosition=0;
  this.ValueMode=0;
  this.LongPosLimit=0;
  this.ShortPosLimit=0;
  this.UpperLimitPrice=0;
  this.LowerLimitPrice=0;
};

var CShfeFtdcReqQryClientPosiLimitField = function() {
  this.StartDate=" ";
  this.EndDate=" ";
};

var CShfeFtdcRspQryClientPosiLimitField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ClientType=0;
  this.TradingRole=0;
  this.StartTotalPosition=0;
  this.ValueMode=0;
  this.LongPosLimit=0;
  this.ShortPosLimit=0;
  this.UpperLimitPrice=0;
  this.LowerLimitPrice=0;
};

var CShfeFtdcRtnClientPosiLimitField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ClientType=0;
  this.TradingRole=0;
  this.StartTotalPosition=0;
  this.ValueMode=0;
  this.LongPosLimit=0;
  this.ShortPosLimit=0;
  this.UpperLimitPrice=0;
  this.LowerLimitPrice=0;
};

var CShfeFtdcReqQrySpecialPosiLimitField = function() {
  this.StartDate=" ";
  this.EndDate=" ";
};

var CShfeFtdcRspQrySpecialPosiLimitField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ClientID=" ";
  this.TradingRole=0;
  this.StartTotalPosition=0;
  this.ValueMode=0;
  this.LongPosLimit=0;
  this.ShortPosLimit=0;
  this.UpperLimitPrice=0;
  this.LowerLimitPrice=0;
};

var CShfeFtdcRtnSpecialPosiLimitField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ClientID=" ";
  this.TradingRole=0;
  this.StartTotalPosition=0;
  this.ValueMode=0;
  this.LongPosLimit=0;
  this.ShortPosLimit=0;
  this.UpperLimitPrice=0;
  this.LowerLimitPrice=0;
};

var CShfeFtdcReqQryTransactionChgField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryTransactionChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.BillSN=0;
  this.ParticipantAccount=" ";
  this.ParticipantID=" ";
  this.Amount=0;
};

var CShfeFtdcRtnTransactionChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.BillSN=0;
  this.ParticipantAccount=" ";
  this.ParticipantID=" ";
  this.Amount=0;
};

var CShfeFtdcReqQryClientChgField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryClientChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.ClientID=" ";
  this.ClientName=" ";
  this.ClientType=0;
  this.IsActive=0;
  this.IdentifiedCardType=" ";
  this.IdentifiedCardNo=" ";
  this.OperationType=0;
};

var CShfeFtdcRtnClientChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.ClientID=" ";
  this.ClientName=" ";
  this.ClientType=0;
  this.IsActive=0;
  this.IdentifiedCardType=" ";
  this.IdentifiedCardNo=" ";
  this.OperationType=0;
};

var CShfeFtdcReqQryPartClientChgField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryPartClientChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.ClientID=" ";
  this.ParticipantID=" ";
  this.OperationType=0;
};

var CShfeFtdcRtnPartClientChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.ClientID=" ";
  this.ParticipantID=" ";
  this.OperationType=0;
};

var CShfeFtdcReqQryPosiLimitChgField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryPosiLimitChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ParticipantID=" ";
  this.TradingRole=0;
  this.StartTotalPosition=0;
  this.ValueMode=0;
  this.LongPosLimit=0;
  this.ShortPosLimit=0;
  this.OperationType=0;
};

var CShfeFtdcRtnPosiLimitChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ParticipantID=" ";
  this.TradingRole=0;
  this.StartTotalPosition=0;
  this.ValueMode=0;
  this.LongPosLimit=0;
  this.ShortPosLimit=0;
  this.OperationType=0;
};

var CShfeFtdcReqQryHedgeDetailChgField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryHedgeDetailChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.OperatorID=" ";
  this.Time=" ";
  this.InstrumentID=" ";
  this.PosiDirection=0;
  this.TradingVolume=0;
  this.HedgeQuota=0;
  this.OperationType=0;
};

var CShfeFtdcRtnHedgeDetailChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.ParticipantID=" ";
  this.ClientID=" ";
  this.OperatorID=" ";
  this.Time=" ";
  this.InstrumentID=" ";
  this.PosiDirection=0;
  this.TradingVolume=0;
  this.HedgeQuota=0;
  this.OperationType=0;
};

var CShfeFtdcReqQryParticipantChgField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryParticipantChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.ParticipantID=" ";
  this.ParticipantName=" ";
  this.ParticipantAbbr=" ";
  this.MemberType=0;
  this.IsActive=0;
  this.OperationType=0;
};

var CShfeFtdcRtnParticipantChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.ParticipantID=" ";
  this.ParticipantName=" ";
  this.ParticipantAbbr=" ";
  this.MemberType=0;
  this.IsActive=0;
  this.OperationType=0;
};

var CShfeFtdcReqQryMarginRateChgField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryMarginRateChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ParticipantID=" ";
  this.TradingRole=0;
  this.HedgeFlag=0;
  this.ValueMode=0;
  this.LongMarginRatio=0;
  this.ShortMarginRatio=0;
  this.OperationType=0;
};

var CShfeFtdcRtnMarginRateChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ParticipantID=" ";
  this.TradingRole=0;
  this.HedgeFlag=0;
  this.ValueMode=0;
  this.LongMarginRatio=0;
  this.ShortMarginRatio=0;
  this.OperationType=0;
};

var CShfeFtdcReqQryUserIpChgField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryUserIpChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.UserID=" ";
  this.IPAddress=" ";
  this.IPMask=" ";
  this.OperationType=0;
};

var CShfeFtdcRtnUserIpChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.UserID=" ";
  this.IPAddress=" ";
  this.IPMask=" ";
  this.OperationType=0;
};

var CShfeFtdcReqQryClientPosiLimitChgField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryClientPosiLimitChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ClientType=0;
  this.TradingRole=0;
  this.StartTotalPosition=0;
  this.ValueMode=0;
  this.LongPosLimit=0;
  this.ShortPosLimit=0;
  this.OperationType=0;
};

var CShfeFtdcRtnClientPosiLimitChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ClientType=0;
  this.TradingRole=0;
  this.StartTotalPosition=0;
  this.ValueMode=0;
  this.LongPosLimit=0;
  this.ShortPosLimit=0;
  this.OperationType=0;
};

var CShfeFtdcReqQrySpecPosiLimitChgField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQrySpecPosiLimitChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ClientID=" ";
  this.TradingRole=0;
  this.StartTotalPosition=0;
  this.ValueMode=0;
  this.LongPosLimit=0;
  this.ShortPosLimit=0;
  this.OperationType=0;
};

var CShfeFtdcRtnSpecPosiLimitChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ClientID=" ";
  this.TradingRole=0;
  this.StartTotalPosition=0;
  this.ValueMode=0;
  this.LongPosLimit=0;
  this.ShortPosLimit=0;
  this.OperationType=0;
};

var CShfeFtdcReqQryHistoryObjectAttrField = function() {
  this.ObjectID=" ";
  this.AttrType=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryHistoryObjectAttrField = function() {
  this.MonDate=" ";
  this.BeginTime=" ";
  this.EndTime=" ";
  this.ObjectID=" ";
  this.AttrType=" ";
  this.ValueType=0;
  this.FirstValue=0;
  this.EndValue=0;
  this.AvgValue=0;
  this.MinValue=0;
  this.MaxValue=0;
  this.ValueCount=0;
};

var CShfeFtdcRtnHistoryObjectAttrField = function() {
  this.MonDate=" ";
  this.BeginTime=" ";
  this.EndTime=" ";
  this.ObjectID=" ";
  this.AttrType=" ";
  this.ValueType=0;
  this.FirstValue=0;
  this.EndValue=0;
  this.AvgValue=0;
  this.MinValue=0;
  this.MaxValue=0;
  this.ValueCount=0;
};

var CShfeFtdcReqQryFrontInfoField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryFrontInfoField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.FrontId=" ";
  this.RspCondition=0;
  this.ReqCount=0;
  this.ReqRate=0;
};

var CShfeFtdcRtnFrontInfoField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.FrontId=" ";
  this.RspCondition=0;
  this.ReqCount=0;
  this.ReqRate=0;
};

var CShfeFtdcReqQrySysUserLoginField = function() {
  this.UserID=" ";
  this.Password=" ";
  this.VersionID=" ";
};

var CShfeFtdcRspQrySysUserLoginField = function() {
  this.UserID=" ";
  this.TradingDay=" ";
  this.LoginTime=" ";
  this.Privilege=0;
  this.VersionFlag=0;
};

var CShfeFtdcReqQrySysUserLogoutField = function() {
  this.UserID=" ";
};

var CShfeFtdcRspQrySysUserLogoutField = function() {
  this.UserID=" ";
};

var CShfeFtdcReqQrySysUserPasswordUpdateField = function() {
  this.UserID=" ";
  this.OldPassword=" ";
  this.NewPassword=" ";
};

var CShfeFtdcRspQrySysUserPasswordUpdateField = function() {
  this.UserID=" ";
  this.PasswordChgMsg=" ";
};

var CShfeFtdcReqQrySysUserRegisterField = function() {
  this.UserID=" ";
  this.UserName=" ";
  this.UserInfo=" ";
  this.Password=" ";
  this.Privilege=0;
  this.EMail=" ";
  this.EMailFlag=0;
  this.HomePhone=" ";
  this.HomePhoneFlag=0;
  this.MobilePhone=" ";
  this.MobilePhoneFlag=0;
};

var CShfeFtdcRspQrySysUserRegisterField = function() {
  this.UserID=" ";
  this.Privilege=0;
};

var CShfeFtdcReqQrySysUserDeleteField = function() {
  this.UserID=" ";
};

var CShfeFtdcRspQrySysUserDeleteField = function() {
  this.UserID=" ";
};

var CShfeFtdcRspQryParticipantInitField = function() {
  this.ParticipantID=" ";
  this.ParticipantName=" ";
  this.ParticipantAbbr=" ";
  this.MemberType=0;
  this.IsActive=0;
  this.OperationType=0;
};

var CShfeFtdcRtnParticipantInitField = function() {
  this.ParticipantID=" ";
  this.ParticipantName=" ";
  this.ParticipantAbbr=" ";
  this.MemberType=0;
  this.IsActive=0;
  this.OperationType=0;
};

var CShfeFtdcRspQryUserInitField = function() {
  this.ParticipantID=" ";
  this.UserID=" ";
  this.UserType=0;
  this.Password=" ";
  this.IsActive=0;
  this.OperationType=0;
};

var CShfeFtdcRtnUserInitField = function() {
  this.ParticipantID=" ";
  this.UserID=" ";
  this.UserType=0;
  this.Password=" ";
  this.IsActive=0;
  this.OperationType=0;
};

var CShfeFtdcRspQryClientInitField = function() {
  this.ClientID=" ";
  this.ClientName=" ";
  this.IdentifiedCardType=" ";
  this.IdentifiedCardNo=" ";
  this.TradingRole=0;
  this.ClientType=0;
  this.IsActive=0;
  this.OperationType=0;
};

var CShfeFtdcRtnClientInitField = function() {
  this.ClientID=" ";
  this.ClientName=" ";
  this.IdentifiedCardType=" ";
  this.IdentifiedCardNo=" ";
  this.TradingRole=0;
  this.ClientType=0;
  this.IsActive=0;
  this.OperationType=0;
};

var CShfeFtdcReqQryTradeLogField = function() {
  this.TradingDay=" ";
  this.IPAddress=" ";
  this.FrontID=" ";
  this.StartParticipant=" ";
  this.EndParticipant=" ";
  this.StartUser=" ";
  this.EndUser=" ";
  this.StartTime=" ";
  this.EndTime=" ";
  this.StartSessionID=" ";
  this.EndSessionID=" ";
  this.IPFlag=0;
  this.PartFlag=0;
  this.UserIDFlag=0;
  this.TimeFlag=0;
  this.FrontFlag=0;
  this.SessionFlag=0;
};

var CShfeFtdcRspQryTradeLogField = function() {
  this.bFlag=0;
  this.TradeLogStr=" ";
};

var CShfeFtdcRtnTradeLogField = function() {
  this.bFlag=0;
  this.TradeLogStr=" ";
};

var CShfeFtdcReqQryWarningEventUpdateField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.OccurDate=" ";
  this.OccurTime=" ";
  this.EvendID=0;
  this.ObjectID=" ";
  this.IPAddress=" ";
  this.EventName=" ";
  this.EventNum=0;
  this.EventType=0;
  this.EventDes=" ";
  this.ProcessFlag=" ";
  this.WarningLevel=" ";
  this.ActiveDate=" ";
  this.ActiveTime=" ";
  this.EventDealDes=" ";
  this.FullEventName=" ";
};

var CShfeFtdcReqQryTradeUserLoginInfoField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryTradeUserLoginInfoField = function() {
  this.ObjectID=" ";
  this.UserID=" ";
  this.ParticipantID=" ";
  this.ProtocolInfo=" ";
  this.IPAddress=" ";
  this.FrontID=0;
  this.UserType=" ";
  this.AccessType=" ";
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.ActionFlag=0;
  this.DataCenter=" ";
};

var CShfeFtdcRtnTradeUserLoginInfoField = function() {
  this.ObjectID=" ";
  this.UserID=" ";
  this.ParticipantID=" ";
  this.ProtocolInfo=" ";
  this.IPAddress=" ";
  this.FrontID=0;
  this.UserType=" ";
  this.AccessType=" ";
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.ActionFlag=0;
  this.DataCenter=" ";
};

var CShfeFtdcReqQryPartTradeField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryPartTradeField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ParticipantID=" ";
  this.TotalPositiveOrder=0;
  this.TotalNegativeOrder=0;
  this.TotalPositiveTrade=0;
  this.TotalNegativeTrade=0;
  this.TotalPositivePosi=0;
  this.TotalNegativePosi=0;
  this.OperationType=0;
};

var CShfeFtdcReqQryTradepeakField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.TradepeakFlag=0;
};

var CShfeFtdcRspQryTradepeakField = function() {
  this.TradepeakFlag=0;
  this.PeakTime=" ";
  this.InsertOrder=0;
  this.ActionOrder=0;
  this.InvalidOrder=0;
  this.TotalBusiness=0;
  this.TradeCount=0;
  this.TotalCount=0;
};

var CShfeFtdcRtnUpdateSysConfigField = function() {
  this.UpdateType=" ";
  this.OldValue=" ";
  this.NewValue=" ";
  this.Standby=" ";
};

var CShfeFtdcRtnSysUserField = function() {
  this.UserID=" ";
  this.UserName=" ";
  this.UserInfo=" ";
  this.Password=" ";
  this.Privilege=0;
  this.EMail=" ";
  this.EMailFlag=0;
  this.HomePhone=" ";
  this.HomePhoneFlag=0;
  this.MobilePhone=" ";
  this.MobilePhoneFlag=0;
};

var CShfeFtdcRtnPriceLimitChgField = function() {
  this.ActionDate=" ";
  this.ActionTime=" ";
  this.InstrumentID=" ";
  this.ValueMode=0;
  this.RoundingMode=0;
  this.UpperLimitPrice=0;
  this.LowerLimitPrice=0;
  this.OperationType=0;
};

var CShfeFtdcReqQryParticipantInitField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcReqQryUserInitField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcSysFileAccessInfoField = function() {
  this.ObjectID=" ";
  this.FileSize=0;
  this.FileTime=0;
};

var CShfeFtdcReqQryHistoryCpuInfoField = function() {
  this.HostName=" ";
  this.CPU=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.KeepAlive=0;
};

var CShfeFtdcRspQryHistoryCpuInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.CPU=" ";
  this.LOAD=0;
  this.USER=0;
  this.NICE=0;
  this.SYS=0;
  this.IDLE=0;
  this.BLOCK=0;
  this.SWAIT=0;
  this.INTR=0;
  this.SSYS=0;
};

var CShfeFtdcReqQryHistoryMemInfoField = function() {
  this.HostName=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.KeepAlive=0;
};

var CShfeFtdcRspQryHistoryMemInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.TOTALREAL=0;
  this.ACTIVEREAL=0;
  this.TOTALVIRTUAL=0;
  this.ACTIVEVIRTUAL=0;
  this.FREE=0;
};

var CShfeFtdcReqQryHistoryNetworkInfoField = function() {
  this.HostName=" ";
  this.LANNAME=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.KeepAlive=0;
};

var CShfeFtdcRspQryHistoryNetworkInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.LANNAME=" ";
  this.LANSTATUS=" ";
  this.IPADDRESS=" ";
  this.RECVBYTES=0;
  this.RECVPACKETS=0;
  this.RECVERRORPACKETS=0;
  this.RECVDROPPACKETS=0;
  this.SENDBYTES=0;
  this.SENDPACKETS=0;
  this.SENDERRORPACKETS=0;
  this.SENDDROPPACKETS=0;
};

var CShfeFtdcRspQryHostConfigField = function() {
  this.CfgType=" ";
  this.CfgDataCenter=" ";
  this.CfgName=" ";
  this.CfgLocation=" ";
  this.CfgHostName=" ";
  this.CfgAttend=" ";
};

var CShfeFtdcReqQryMonitorOnlineUserField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryMonitorOnlineUserField = function() {
  this.UserID=" ";
  this.IPAddress=" ";
};

var CShfeFtdcReqQryFrontStatField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryFrontStatField = function() {
  this.FrontID=0;
  this.PositiveOrder=0;
  this.NegativeOrder=0;
  this.TotalPositiveOrder=0;
  this.TotalNegativeOrder=0;
  this.OrderAction=0;
  this.TotalOrderAction=0;
};

var CShfeFtdcRtnSysTimeSyncField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
};

var CShfeFtdcRtnDataCenterChgField = function() {
  this.DataCenterID=" ";
};

var CShfeFtdcReqQryHistoryTradePeakField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryHistoryTradePeakField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.AttrType=" ";
  this.AttrValue=0;
  this.RltAttrType=" ";
  this.RltAttrValue=0;
  this.MaxMonDate=" ";
  this.MaxMonTime=" ";
  this.MaxAttrValue=0;
  this.MaxRltAttrValue=0;
  this.OldMonDate=" ";
  this.OldMonTime=" ";
  this.OldAttrValue=0;
  this.OldRltAttrValue=0;
};

var CShfeFtdcRtnHistoryTradePeakField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.AttrType=" ";
  this.AttrValue=0;
  this.RltAttrType=" ";
  this.RltAttrValue=0;
  this.MaxMonDate=" ";
  this.MaxMonTime=" ";
  this.MaxAttrValue=0;
  this.MaxRltAttrValue=0;
  this.OldMonDate=" ";
  this.OldMonTime=" ";
  this.OldAttrValue=0;
  this.OldRltAttrValue=0;
};

var CShfeFtdcReqQrySyslogEventField = function() {
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.EventType=0;
  this.WarningLevel=" ";
  this.ObjectID=" ";
  this.EventName=" ";
  this.IPAddress=" ";
};

var CShfeFtdcRspQrySyslogEventField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.OccurDate=" ";
  this.OccurTime=" ";
  this.EvendID=0;
  this.ObjectID=" ";
  this.IPAddress=" ";
  this.EventName=" ";
  this.EventNum=0;
  this.EventType=0;
  this.EventDes=" ";
  this.ProcessFlag=" ";
  this.WarningLevel=" ";
  this.EventDealDes=" ";
  this.FullEventName=" ";
  this.EventCount=0;
};

var CShfeFtdcRtnSyslogEventField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.OccurDate=" ";
  this.OccurTime=" ";
  this.EvendID=0;
  this.ObjectID=" ";
  this.IPAddress=" ";
  this.EventName=" ";
  this.EventNum=0;
  this.EventType=0;
  this.EventDes=" ";
  this.ProcessFlag=" ";
  this.WarningLevel=" ";
  this.EventDealDes=" ";
  this.FullEventName=" ";
};

var CShfeFtdcReqQrySyslogEventSubcriberField = function() {
  this.ObjectID=" ";
  this.EventName=" ";
  this.WarningLevel=" ";
  this.filter=" ";
  this.antifilter=" ";
  this.ObjectNum=0;
  this.KeepAlive=0;
  this.MonDate=" ";
  this.MonTime=" ";
  this.ProcessFlag=" ";
};

var CShfeFtdcReqQryTradeDayChangeField = function() {
  this.ChangeType=" ";
  this.OldDate=" ";
  this.NewDate=" ";
};

var CShfeFtdcRspQryTradeDayChangeField = function() {
  this.ChangeType=" ";
  this.OldDate=" ";
  this.NewDate=" ";
};

var CShfeFtdcReqQryTomcatInfoField = function() {
  this.ObjectID=" ";
  this.SubObjectID=" ";
  this.AttrType=" ";
};

var CShfeFtdcRspQryWebAppInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.AppName=" ";
  this.Status=" ";
  this.Desc=" ";
  this.StartTime=" ";
  this.ServletNum=" ";
  this.ProcessTime=" ";
  this.RequestNum=" ";
  this.ErrorNum=" ";
  this.SessionSize=" ";
  this.TimeOut=" ";
  this.JDBCUsage=" ";
  this.JSPNum=" ";
};

var CShfeFtdcRtnWebAppInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.AppName=" ";
  this.Status=" ";
  this.Desc=" ";
  this.StartTime=" ";
  this.ServletNum=" ";
  this.ProcessTime=" ";
  this.RequestNum=" ";
  this.ErrorNum=" ";
  this.SessionSize=" ";
  this.TimeOut=" ";
  this.JDBCUsage=" ";
  this.JSPNum=" ";
};

var CShfeFtdcRspQryServletInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.Name=" ";
  this.LoadTime=0;
  this.RequestNum=0;
  this.RequestErrNum=0;
  this.ProcessTime=0;
  this.MixTime=0;
  this.MaxTime=0;
};

var CShfeFtdcRtnServletInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.Name=" ";
  this.LoadTime=0;
  this.RequestNum=0;
  this.RequestErrNum=0;
  this.ProcessTime=0;
  this.MixTime=0;
  this.MaxTime=0;
};

var CShfeFtdcRspQryFileInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.PathName=" ";
  this.FileSize=" ";
  this.LastModDate=" ";
  this.FileType=" ";
};

var CShfeFtdcRtnFileInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.PathName=" ";
  this.FileSize=" ";
  this.LastModDate=" ";
  this.FileType=" ";
};

var CShfeFtdcRspQrySessionInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.SessionID=" ";
  this.SessionName=" ";
  this.RemoteIP=" ";
  this.BeginTime=" ";
  this.LatestTime=" ";
  this.MaxIdleTime=0;
};

var CShfeFtdcRtnSessionInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.SessionID=" ";
  this.SessionName=" ";
  this.RemoteIP=" ";
  this.BeginTime=" ";
  this.LatestTime=" ";
  this.MaxIdleTime=0;
};

var CShfeFtdcRspQryJDBCInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.AppName=" ";
  this.Name=" ";
  this.Usage=0;
  this.ConnNumMax=0;
  this.ConnNumFree=0;
  this.ConnNumUnRU=0;
  this.ConnNumRU=0;
  this.UserName=" ";
  this.Type=" ";
  this.URL=" ";
};

var CShfeFtdcRtnJDBCInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.AppName=" ";
  this.Name=" ";
  this.Usage=0;
  this.ConnNumMax=0;
  this.ConnNumFree=0;
  this.ConnNumUnRU=0;
  this.ConnNumRU=0;
  this.UserName=" ";
  this.Type=" ";
  this.URL=" ";
};

var CShfeFtdcRspQryThreadInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.Name=" ";
  this.ThreadNum=0;
  this.ThreadStatus=" ";
  this.InNative=0;
  this.Suspended=" ";
  this.BlockCount=" ";
  this.WaitCount=0;
  this.CpuTime=0;
  this.UserTime=0;
};

var CShfeFtdcRtnThreadInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.Name=" ";
  this.ThreadNum=0;
  this.ThreadStatus=" ";
  this.InNative=0;
  this.Suspended=" ";
  this.BlockCount=" ";
  this.WaitCount=0;
  this.CpuTime=0;
  this.UserTime=0;
};

var CShfeFtdcReqQryVMInfoField = function() {
  this.ObjectID=" ";
  this.SubObjectID=" ";
  this.AttrType=" ";
};

var CShfeFtdcRspQryVMInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.Name=" ";
  this.VmName=" ";
  this.VmVendor=" ";
  this.VmVersion=" ";
  this.StartTime=" ";
  this.BootClassPath=" ";
  this.ClassPath=" ";
  this.LibraryPath=" ";
  this.Arguments=" ";
};

var CShfeFtdcRtnVMInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.Name=" ";
  this.VmName=" ";
  this.VmVendor=" ";
  this.VmVersion=" ";
  this.StartTime=" ";
  this.BootClassPath=" ";
  this.ClassPath=" ";
  this.LibraryPath=" ";
  this.Arguments=" ";
};

var CShfeFtdcReqQryPropertyInfoField = function() {
  this.ObjectID=" ";
  this.SubObjectID=" ";
  this.AttrType=" ";
};

var CShfeFtdcRspQryPropertyInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.Property=" ";
  this.ClipFlag=0;
  this.Value=" ";
};

var CShfeFtdcRtnPropertyInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.Property=" ";
  this.ClipFlag=0;
  this.Value=" ";
};

var CShfeFtdcReqQryMemPoolInfoField = function() {
  this.ObjectID=" ";
  this.SubObjectID=" ";
  this.AttrType=" ";
};

var CShfeFtdcRspQryMemPoolInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.PoolName=" ";
  this.Usage=" ";
  this.committedbytes=" ";
  this.initbytes=" ";
  this.maxbytes=" ";
  this.usedbytes=" ";
  this.Type=" ";
};

var CShfeFtdcRtnMemPoolInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.PoolName=" ";
  this.Usage=" ";
  this.committedbytes=" ";
  this.initbytes=" ";
  this.maxbytes=" ";
  this.usedbytes=" ";
  this.Type=" ";
};

var CShfeFtdcReqQryFileContentInfoField = function() {
  this.ObjectID=" ";
  this.SubObjectID=" ";
  this.AttrType=" ";
};

var CShfeFtdcRspQryFileContentInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.FileName=" ";
  this.FileContent=" ";
};

var CShfeFtdcRtnFileContentInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.FileName=" ";
  this.FileContent=" ";
};

var CShfeFtdcReqQryConnectionInfoField = function() {
  this.ObjectID=" ";
  this.SubObjectID=" ";
  this.AttrType=" ";
};

var CShfeFtdcRspQryConnectionInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.ServiceName=" ";
  this.Stage=" ";
  this.RequestCount=0;
  this.ErrorCount=0;
  this.ProcTime=0;
  this.BytesReceived=0;
  this.BytesSent=0;
  this.RemoteIP=" ";
  this.MaxAccessURI=" ";
};

var CShfeFtdcRtnConnectionInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.ServiceName=" ";
  this.Stage=" ";
  this.RequestCount=0;
  this.ErrorCount=0;
  this.ProcTime=0;
  this.BytesReceived=0;
  this.BytesSent=0;
  this.RemoteIP=" ";
  this.MaxAccessURI=" ";
};

var CShfeFtdcReqQryConnectorInfoField = function() {
  this.ObjectID=" ";
  this.SubObjectID=" ";
  this.AttrType=" ";
};

var CShfeFtdcRspQryConnectorInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.Name=" ";
  this.ThreadsCount=" ";
  this.BusyThreadsCount=" ";
  this.MaxThreads=" ";
  this.MaxSpareThreads=" ";
  this.MinSpareThreads=" ";
  this.MaxTime=" ";
  this.MaxProcTime=" ";
  this.RequestCount=" ";
  this.ErrorCount=" ";
  this.BytesReceived=" ";
  this.BytesSent=" ";
};

var CShfeFtdcRtnConnectorInfoField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.Name=" ";
  this.ThreadsCount=" ";
  this.BusyThreadsCount=" ";
  this.MaxThreads=" ";
  this.MaxSpareThreads=" ";
  this.MinSpareThreads=" ";
  this.MaxTime=" ";
  this.MaxProcTime=" ";
  this.RequestCount=" ";
  this.ErrorCount=" ";
  this.BytesReceived=" ";
  this.BytesSent=" ";
};

var CShfeFtdcReqQryDBQueryField = function() {
  this.ObjectID=" ";
  this.AttrType=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRspQryDBQueryField = function() {
  this.ObjectID=" ";
  this.AttrType=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.DBQueryResult=" ";
};

var CShfeFtdcRtnDBQueryField = function() {
  this.ObjectID=" ";
  this.AttrType=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.DBQueryResult=" ";
};

var CShfeFtdcSysGeneralFieldField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.ObjectID=" ";
  this.SubObjectID=" ";
  this.AttrType=" ";
  this.Content=" ";
};

var CShfeFtdcReqQryGetFileField = function() {
  this.FileName=" ";
  this.Version=" ";
  this.Offset=0;
};

var CShfeFtdcRspQryGetFileField = function() {
  this.FileName=" ";
  this.Version=" ";
  this.Offset=0;
  this.Length=0;
  this.Comment=" ";
};

var CShfeFtdcReqQrySyslogEventUpdateField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.OccurDate=" ";
  this.OccurTime=" ";
  this.EvendID=0;
  this.ObjectID=" ";
  this.IPAddress=" ";
  this.EventName=" ";
  this.EventNum=0;
  this.EventType=0;
  this.EventDes=" ";
  this.ProcessFlag=" ";
  this.WarningLevel=" ";
  this.EventDealDes=" ";
  this.FullEventName=" ";
};

var CShfeFtdcReqQryWarningQueryField = function() {
  this.EvendID=0;
};

var CShfeFtdcRspQryWarningQueryField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.EvendID=0;
  this.DBQueryResult=" ";
};

var CShfeFtdcRtnWarningQueryField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.EvendID=0;
  this.DBQueryResult=" ";
};

var CShfeFtdcReqQryWebVisitField = function() {
  this.ObjectID=" ";
  this.AttrType=" ";
  this.BeginDate=" ";
  this.BeginTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
};

var CShfeFtdcRtnHostConfigField = function() {
  this.CfgType=" ";
  this.CfgDataCenter=" ";
  this.CfgName=" ";
  this.CfgLocation=" ";
  this.CfgHostName=" ";
  this.CfgAttend=" ";
};

var CShfeFtdcReqQryWarningActiveChangeField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.WarningActive=0;
};

var CShfeFtdcRspQryWarningActiveChangeField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.WarningActive=0;
};

var CShfeFtdcRtnWarningActiveChangeField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.WarningActive=0;
};

var CShfeFtdcReqQryGeneralOperateField = function() {
  this.GeneralOperateType=0;
  this.GeneralOperateTable=" ";
  this.GeneralOperateOption=" ";
  this.GeneralOperateSet=" ";
};

var CShfeFtdcRspQryGeneralOperateField = function() {
  this.GeneralOperateType=0;
  this.GeneralOperateTable=" ";
  this.GeneralOperateOption=" ";
  this.GeneralOperateSet=" ";
};

var CShfeFtdcRtnGeneralOperateField = function() {
  this.GeneralOperateType=0;
  this.GeneralOperateTable=" ";
  this.GeneralOperateOption=" ";
  this.GeneralOperateSet=" ";
};

var CShfeFtdcReqQryNetDeviceLinkedField = function() {
  this.OperationType=0;
  this.SysNetSubAreaID=0;
  this.FuctionArea=" ";
  this.IPDECODE=0;
  this.ObjectID=" ";
};

var CShfeFtdcRspQryNetDeviceLinkedField = function() {
  this.OperationType=0;
  this.ID=0;
  this.NetDeviceID=0;
  this.NetPortID=0;
  this.NetObjectID=" ";
  this.NetPortType=" ";
  this.LinkNetDeviceID=0;
  this.LinkNetPortID=0;
  this.LinkNetObjectID=" ";
  this.LinkNetPortType=" ";
  this.LinkSource=0;
};

var CShfeFtdcRtnNetDeviceLinkedField = function() {
  this.OperationType=0;
  this.ID=0;
  this.NetDeviceID=0;
  this.NetPortID=0;
  this.NetObjectID=" ";
  this.NetPortType=" ";
  this.LinkNetDeviceID=0;
  this.LinkNetPortID=0;
  this.LinkNetObjectID=" ";
  this.LinkNetPortType=" ";
  this.LinkSource=0;
};

var CShfeFtdcReqQryTradeUserLoginStatField = function() {
  this.ObjectID=" ";
};

var CShfeFtdcRspQryTradeUserLoginStatField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.ObjectID=" ";
  this.IPAddress=" ";
  this.ParticipantID=" ";
  this.UserID=" ";
  this.FrontId=" ";
};

var CShfeFtdcReqQryTradeFrontOrderRttStatField = function() {
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonStartTime=" ";
  this.MonEndTime=" ";
};

var CShfeFtdcRspQryTradeFrontOrderRttStatField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.ObjectID=" ";
  this.OrderCount=0;
  this.OrderRttSum=0;
  this.OrderMaxRtt=0;
  this.OrderMinRtt=0;
  this.OrderRttSqu=0;
  this.OrderRttCutDistrib=" ";
};

var CShfeFtdcRtnTradeFrontOrderRttStatField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.ObjectID=" ";
  this.OrderCount=0;
  this.OrderRttSum=0;
  this.OrderMaxRtt=0;
  this.OrderMinRtt=0;
  this.OrderRttSqu=0;
  this.OrderRttCutDistrib=" ";
};

var CShfeFtdcReqQryParticTradeOrderStatesField = function() {
  this.ParticipantID=" ";
  this.UserID=" ";
  this.MonDate=" ";
  this.MonStartTime=" ";
  this.MonEndTime=" ";
};

var CShfeFtdcRspQryParticTradeOrderStatesField = function() {
  this.ParticipantID=" ";
  this.UserID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.StaticWidth=0;
  this.FrontID=0;
  this.OrderCount=0;
  this.CancleCount=0;
  this.QueryCount=0;
  this.TradeCount=0;
  this.TradeMoney=0;
  this.OrderCntMax=0;
  this.CancleCntMax=0;
  this.QueryCntMax=0;
  this.TradeCntMax=0;
  this.TradeMoneyMax=0;
};

var CShfeFtdcRtnParticTradeOrderStatesField = function() {
  this.ParticipantID=" ";
  this.UserID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.StaticWidth=0;
  this.FrontID=0;
  this.OrderCount=0;
  this.CancleCount=0;
  this.QueryCount=0;
  this.TradeCount=0;
  this.TradeMoney=0;
  this.OrderCntMax=0;
  this.CancleCntMax=0;
  this.QueryCntMax=0;
  this.TradeCntMax=0;
  this.TradeMoneyMax=0;
};

var CShfeFtdcReqQryRouterInfoField = function() {
  this.HostName=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.KeepAlive=0;
};

var CShfeFtdcRspQryRouterInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.Dev=" ";
  this.Destination=" ";
  this.Gateway=" ";
  this.Mask=" ";
  this.Flag=" ";
  this.RefCnt=0;
  this.Use=0;
  this.Metric=0;
  this.Mtu=0;
  this.Win=0;
  this.Rtt=0;
};

var CShfeFtdcRtnRouterInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.Dev=" ";
  this.Destination=" ";
  this.Gateway=" ";
  this.Mask=" ";
  this.Flag=" ";
  this.RefCnt=0;
  this.Use=0;
  this.Metric=0;
  this.Mtu=0;
  this.Win=0;
  this.Rtt=0;
};

var CShfeFtdcReqQryDiskIOField = function() {
  this.HostName=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.KeepAlive=0;
};

var CShfeFtdcRspQryDiskIOField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.PartName=" ";
  this.ReadMerges=0;
  this.WriteMerges=0;
  this.ReadIOs=0;
  this.WriteIOs=0;
  this.ReadKBs=0;
  this.WriteKBs=0;
  this.SizeVal=0;
  this.QueueVal=0;
  this.Svc_t=0;
  this.Busy=0;
};

var CShfeFtdcRtnDiskIOField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.PartName=" ";
  this.ReadMerges=0;
  this.WriteMerges=0;
  this.ReadIOs=0;
  this.WriteIOs=0;
  this.ReadKBs=0;
  this.WriteKBs=0;
  this.SizeVal=0;
  this.QueueVal=0;
  this.Svc_t=0;
  this.Busy=0;
};

var CShfeFtdcReqQryStatInfoField = function() {
  this.HostName=" ";
  this.StartDate=" ";
  this.StartTime=" ";
  this.EndDate=" ";
  this.EndTime=" ";
  this.KeepAlive=0;
};

var CShfeFtdcRspQryStatInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.ProcRun=0;
  this.ProcBlk=0;
  this.SwapIn=0;
  this.SwapOut=0;
  this.BlockIn=0;
  this.BlockOut=0;
  this.Inter=0;
  this.Context=0;
  this.CPUUser=0;
  this.CPUSys=0;
  this.CPUIdle=0;
  this.CPUIOWait=0;
  this.CPUSteal=0;
};

var CShfeFtdcRtnStatInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.ProcRun=0;
  this.ProcBlk=0;
  this.SwapIn=0;
  this.SwapOut=0;
  this.BlockIn=0;
  this.BlockOut=0;
  this.Inter=0;
  this.Context=0;
  this.CPUUser=0;
  this.CPUSys=0;
  this.CPUIdle=0;
  this.CPUIOWait=0;
  this.CPUSteal=0;
};

var CShfeFtdcReqQryTradeOrderRttCutLineField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.UserName=" ";
  this.OrderRttCutLine=" ";
  this.OrderRttWidth=0;
};

var CShfeFtdcRspQryTradeOrderRttCutLineField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.UserName=" ";
  this.OrderRttCutLine=" ";
  this.OrderRttWidth=0;
};

var CShfeFtdcRtnTradeOrderRttCutLineField = function() {
  this.MonDate=" ";
  this.OrderRttCutLine=" ";
};

var CShfeFtdcReqQryClientInfoField = function() {
  this.ClientID=" ";
  this.ClientName=" ";
};

var CShfeFtdcRspQryClientInfoField = function() {
  this.ClientID=" ";
  this.ClientName=" ";
  this.IdentifiedCardType=" ";
  this.IdentifiedCardNo=" ";
  this.TradingRole=0;
  this.ClientType=0;
  this.IsActive=0;
  this.OperationType=0;
};

var CShfeFtdcRtnClientInfoField = function() {
  this.ClientID=" ";
  this.ClientName=" ";
  this.IdentifiedCardType=" ";
  this.IdentifiedCardNo=" ";
  this.TradingRole=0;
  this.ClientType=0;
  this.IsActive=0;
  this.OperationType=0;
};

var CShfeFtdcReqQryEventDescriptionField = function() {
  this.EventDesID=" ";
  this.UserName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.EventDes=" ";
};

var CShfeFtdcRspQryEventDescriptionField = function() {
  this.EventDesID=" ";
  this.UserName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.EventDes=" ";
};

var CShfeFtdcRtnEventDescriptionField = function() {
  this.EventDesID=" ";
  this.UserName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.EventDes=" ";
};

var CShfeFtdcReqQryFrontUniqueIDField = function() {
  this.FrontID=0;
  this.FrontName=" ";
};

var CShfeFtdcRspQryFrontUniqueIDField = function() {
  this.FrontID=0;
  this.FrontName=" ";
};

var CShfeFtdcRtnFrontUniqueIDField = function() {
  this.FrontID=0;
  this.FrontName=" ";
};

var CShfeFtdcReqQryNetPartyLinkAddrChangeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.RelationID=0;
  this.OLDADDRESS=" ";
  this.NEWADDRESS=" ";
  this.OPERATOR=" ";
  this.MonDate=" ";
  this.MonTime=" ";
};

var CShfeFtdcRspQryNetPartyLinkAddrChangeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.RelationID=0;
  this.OLDADDRESS=" ";
  this.NEWADDRESS=" ";
  this.OPERATOR=" ";
  this.MonDate=" ";
  this.MonTime=" ";
};

var CShfeFtdcRtnNetPartyLinkAddrChangeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.RelationID=0;
  this.OLDADDRESS=" ";
  this.NEWADDRESS=" ";
  this.OPERATOR=" ";
  this.MonDate=" ";
  this.MonTime=" ";
};

var CShfeFtdcReqQryNetDelPartyLinkInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.MEMBER_NO=" ";
  this.MEMBER_NAME=" ";
  this.REMOTE_ADDR=" ";
  this.LOCAL_ADDR=" ";
  this.ADDRESS=" ";
  this.LINE_STATUS=" ";
  this.CONTACT=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.EMAIL=" ";
  this.FAX=" ";
  this.PROVINCE=" ";
  this.DDN_NO=" ";
  this.IN_MODE=" ";
  this.IP_WAN=" ";
  this.IP_LAN=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.INTERFACE_DATE=" ";
  this.SOFTWARE=" ";
  this.FEE_TYPE=" ";
  this.SERVICEPROVIDER=" ";
  this.IF_ZIYING=" ";
  this.IF_TUOGUAN=" ";
  this.HASOTHER=" ";
  this.SEAT_NO=" ";
  this.PRO=" ";
};

var CShfeFtdcRspQryNetDelPartyLinkInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.MEMBER_NO=" ";
  this.MEMBER_NAME=" ";
  this.REMOTE_ADDR=" ";
  this.LOCAL_ADDR=" ";
  this.ADDRESS=" ";
  this.LINE_STATUS=" ";
  this.CONTACT=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.EMAIL=" ";
  this.FAX=" ";
  this.PROVINCE=" ";
  this.DDN_NO=" ";
  this.IN_MODE=" ";
  this.IP_WAN=" ";
  this.IP_LAN=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.INTERFACE_DATE=" ";
  this.SOFTWARE=" ";
  this.FEE_TYPE=" ";
  this.SERVICEPROVIDER=" ";
  this.IF_ZIYING=" ";
  this.IF_TUOGUAN=" ";
  this.HASOTHER=" ";
  this.SEAT_NO=" ";
  this.PRO=" ";
};

var CShfeFtdcRtnNetDelPartyLinkInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.MEMBER_NO=" ";
  this.MEMBER_NAME=" ";
  this.REMOTE_ADDR=" ";
  this.LOCAL_ADDR=" ";
  this.ADDRESS=" ";
  this.LINE_STATUS=" ";
  this.CONTACT=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.EMAIL=" ";
  this.FAX=" ";
  this.PROVINCE=" ";
  this.DDN_NO=" ";
  this.IN_MODE=" ";
  this.IP_WAN=" ";
  this.IP_LAN=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.INTERFACE_DATE=" ";
  this.SOFTWARE=" ";
  this.FEE_TYPE=" ";
  this.SERVICEPROVIDER=" ";
  this.IF_ZIYING=" ";
  this.IF_TUOGUAN=" ";
  this.HASOTHER=" ";
  this.SEAT_NO=" ";
  this.PRO=" ";
};

var CShfeFtdcReqQryPerformanceTopField = function() {
  this.OperationType=0;
  this.AttrType=" ";
  this.NetArea=0;
  this.NetSubArea=" ";
  this.KeyWord=" ";
  this.SortValue=0;
  this.SortType=0;
  this.DuringTimeType=0;
  this.DuringTimeValue=0;
  this.TopN=0;
  this.TopResult=" ";
};

var CShfeFtdcRspQryPerformanceTopField = function() {
  this.OperationType=0;
  this.AttrType=" ";
  this.NetArea=0;
  this.NetSubArea=" ";
  this.KeyWord=" ";
  this.SortValue=0;
  this.SortType=0;
  this.DuringTimeType=0;
  this.DuringTimeValue=0;
  this.TopN=0;
  this.TopResult=" ";
};

var CShfeFtdcRtnPerformanceTopField = function() {
  this.OperationType=0;
  this.AttrType=" ";
  this.NetArea=0;
  this.NetSubArea=" ";
  this.KeyWord=" ";
  this.SortValue=0;
  this.SortType=0;
  this.DuringTimeType=0;
  this.DuringTimeValue=0;
  this.TopN=0;
  this.TopResult=" ";
};

var CShfeFtdcReqQryInstrumentStatusField = function() {
  this.SettlementGroupID=" ";
  this.InstrumentID=" ";
  this.InstrumentStatus=0;
  this.TradingSegmentSN=0;
  this.EnterTime=" ";
  this.EnterReason=0;
  this.EnterDate=" ";
};

var CShfeFtdcRspQryInstrumentStatusField = function() {
  this.SettlementGroupID=" ";
  this.InstrumentID=" ";
  this.InstrumentStatus=0;
  this.TradingSegmentSN=0;
  this.EnterTime=" ";
  this.EnterReason=0;
  this.EnterDate=" ";
};

var CShfeFtdcRtnInstrumentStatusField = function() {
  this.SettlementGroupID=" ";
  this.InstrumentID=" ";
  this.InstrumentStatus=0;
  this.TradingSegmentSN=0;
  this.EnterTime=" ";
  this.EnterReason=0;
  this.EnterDate=" ";
};

var CShfeFtdcReqQryCurrTradingSegmentAttrField = function() {
  this.SettlementGroupID=" ";
  this.TradingSegmentSN=0;
  this.TradingSegmentName=" ";
  this.StartTime=" ";
  this.InstrumentStatus=0;
  this.InstrumentID=" ";
  this.AdvanceDays=0;
};

var CShfeFtdcRspQryCurrTradingSegmentAttrField = function() {
  this.SettlementGroupID=" ";
  this.TradingSegmentSN=0;
  this.TradingSegmentName=" ";
  this.StartTime=" ";
  this.InstrumentStatus=0;
  this.InstrumentID=" ";
  this.AdvanceDays=0;
};

var CShfeFtdcRtnCurrTradingSegmentAttrField = function() {
  this.SettlementGroupID=" ";
  this.TradingSegmentSN=0;
  this.TradingSegmentName=" ";
  this.StartTime=" ";
  this.InstrumentStatus=0;
  this.InstrumentID=" ";
  this.AdvanceDays=0;
};

var CShfeFtdcReqQryRealTimeNetObjectAttrField = function() {
  this.ObjectID=" ";
  this.AttrType=" ";
};

var CShfeFtdcReqQryNetAreaField = function() {
  this.ID=0;
};

var CShfeFtdcRspQryNetAreaField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRtnNetAreaField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcReqQryNetSubAreaField = function() {
  this.ID=0;
  this.SysNetAreaID=0;
};

var CShfeFtdcRspQryNetSubAreaField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SysNetAreaID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRtnNetSubAreaField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SysNetAreaID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcReqQryNetSubAreaIPField = function() {
  this.ID=0;
  this.SysNetAreaID=0;
  this.SysNetSubAreaID=0;
};

var CShfeFtdcRspQryNetSubAreaIPField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SysNetSubAreaID=0;
  this.IP=" ";
  this.Mask=" ";
};

var CShfeFtdcRtnNetSubAreaIPField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SysNetSubAreaID=0;
  this.IP=" ";
  this.Mask=" ";
};

var CShfeFtdcReqQryNetDeviceDetectField = function() {
  this.SysNetAreaID=0;
  this.SysNetSubAreaID=0;
  this.IP=" ";
  this.Mask=" ";
};

var CShfeFtdcReqQryNetDeviceRequestField = function() {
  this.OperationType=0;
  this.SysNetSubAreaID=0;
  this.FuctionArea=" ";
  this.IPDECODE=0;
};

var CShfeFtdcRspQryNetDeviceField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.MonitorType_ID=0;
  this.SysNetSubAreaID=0;
  this.CATEGORY_ID=0;
  this.FuctionArea=" ";
  this.IPADDR=" ";
  this.IPDECODE=0;
  this.NAME=" ";
  this.PORTNUMBER=0;
  this.CONFIGFILE=" ";
  this.RCOMMUNITY=" ";
  this.SNMPVERSION=0;
  this.RAMSIZE=0;
  this.FLASHSIZE=0;
  this.NVRAMSIZE=0;
  this.CABINET_ID=0;
  this.ROOM_ID=0;
  this.IOSVERSION_ID=0;
  this.DESCRIPTION=" ";
  this.USERNAME=" ";
  this.PASSWD=" ";
  this.ENPASSWD=" ";
  this.MANUFACTORY_ID=0;
  this.CFGSAVETYPE=0;
  this.DEVICETYPE=" ";
  this.SENDSMS=0;
  this.ISSNMP=0;
  this.SLOTNUM=0;
  this.ISPING=0;
  this.IFNUM=0;
  this.APPLICATION_ID=0;
};

var CShfeFtdcRtnNetDeviceField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.MonitorType_ID=0;
  this.SysNetSubAreaID=0;
  this.CATEGORY_ID=0;
  this.FuctionArea=" ";
  this.IPADDR=" ";
  this.IPDECODE=0;
  this.NAME=" ";
  this.PORTNUMBER=0;
  this.CONFIGFILE=" ";
  this.RCOMMUNITY=" ";
  this.SNMPVERSION=0;
  this.RAMSIZE=0;
  this.FLASHSIZE=0;
  this.NVRAMSIZE=0;
  this.CABINET_ID=0;
  this.ROOM_ID=0;
  this.IOSVERSION_ID=0;
  this.DESCRIPTION=" ";
  this.USERNAME=" ";
  this.PASSWD=" ";
  this.ENPASSWD=" ";
  this.MANUFACTORY_ID=0;
  this.CFGSAVETYPE=0;
  this.DEVICETYPE=" ";
  this.SENDSMS=0;
  this.ISSNMP=0;
  this.SLOTNUM=0;
  this.ISPING=0;
  this.IFNUM=0;
  this.APPLICATION_ID=0;
};

var CShfeFtdcRspQryNetDeviceDetectField = function() {
  this.SysNetAreaID=0;
  this.SysNetSubAreaID=0;
  this.IP=" ";
  this.Mask=" ";
};

var CShfeFtdcReqQryNetBuildingField = function() {
  this.ID=0;
};

var CShfeFtdcRspQryNetBuildingField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRtnNetBuildingField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcReqQryNetRoomField = function() {
  this.ID=0;
  this.SysNetBuildingID=0;
};

var CShfeFtdcRspQryNetRoomField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SysNetBuildingID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRtnNetRoomField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SysNetBuildingID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcReqQryNetCabinetsField = function() {
  this.ID=0;
  this.SysNetRoomID=0;
  this.SysNetBuildingID=0;
};

var CShfeFtdcRspQryNetCabinetsField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SysNetRoomID=0;
  this.SysNetBuildingID=0;
  this.CName=" ";
  this.EName=" ";
  this.CabinetsType=" ";
};

var CShfeFtdcRtnNetCabinetsField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SysNetRoomID=0;
  this.SysNetBuildingID=0;
  this.CName=" ";
  this.EName=" ";
  this.CabinetsType=" ";
};

var CShfeFtdcReqQryNetOIDField = function() {
  this.OperationType=0;
  this.ID=0;
  this.Manufactory=" ";
  this.DeviceType=" ";
  this.CName=" ";
  this.EName=" ";
  this.OID=" ";
  this.Unit=" ";
  this.isTheTable=0;
};

var CShfeFtdcRspQryNetOIDField = function() {
  this.OperationType=0;
  this.ID=0;
  this.Manufactory=" ";
  this.DeviceType=" ";
  this.CName=" ";
  this.EName=" ";
  this.OID=" ";
  this.Unit=" ";
  this.isTheTable=0;
};

var CShfeFtdcRtnNetOIDField = function() {
  this.OperationType=0;
  this.ID=0;
  this.Manufactory=" ";
  this.DeviceType=" ";
  this.CName=" ";
  this.EName=" ";
  this.OID=" ";
  this.Unit=" ";
  this.isTheTable=0;
};

var CShfeFtdcReqQryNetTimePolicyField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.PolicyType=0;
  this.PolicyString=" ";
  this.TradingDay=0;
  this.Description=" ";
  this.Operation=0;
};

var CShfeFtdcRspQryNetTimePolicyField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.PolicyType=0;
  this.PolicyString=" ";
  this.TradingDay=0;
  this.Description=" ";
  this.Operation=0;
};

var CShfeFtdcRtnNetTimePolicyField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.PolicyType=0;
  this.PolicyString=" ";
  this.TradingDay=0;
  this.Description=" ";
  this.Operation=0;
};

var CShfeFtdcReqQryNetGatherTaskField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.AttrType=" ";
  this.PolicyTypeID=0;
  this.DataType=0;
  this.TypeFlag=0;
};

var CShfeFtdcRspQryNetGatherTaskField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.AttrType=" ";
  this.PolicyTypeID=0;
  this.DataType=0;
  this.TypeFlag=0;
};

var CShfeFtdcRtnNetGatherTaskField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.AttrType=" ";
  this.PolicyTypeID=0;
  this.DataType=0;
  this.TypeFlag=0;
};

var CShfeFtdcReqQryNetDeviceChgField = function() {
  this.DeviceID=0;
  this.SysNetSubAreaID=0;
  this.OldObjectID=" ";
  this.NewObjectID=" ";
};

var CShfeFtdcRspQryNetDeviceChgField = function() {
  this.DeviceID=0;
  this.SysNetSubAreaID=0;
  this.OldObjectID=" ";
  this.NewObjectID=" ";
};

var CShfeFtdcRtnNetDeviceChgField = function() {
  this.DeviceID=0;
  this.SysNetSubAreaID=0;
  this.OldObjectID=" ";
  this.NewObjectID=" ";
};

var CShfeFtdcReqQryNetDeviceTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.Manufactory=" ";
  this.DeviceType=" ";
};

var CShfeFtdcRspQryNetDeviceTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.Manufactory=" ";
  this.DeviceType=" ";
};

var CShfeFtdcRtnNetDeviceTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.Manufactory=" ";
  this.DeviceType=" ";
};

var CShfeFtdcReqQryNetDeviceCategoryField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRspQryNetDeviceCategoryField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRtnNetDeviceCategoryField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcReqQryNetManufactoryField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRspQryNetManufactoryField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRtnNetManufactoryField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcReqQryNetCommunityField = function() {
  this.OperationType=0;
  this.ID=0;
  this.IPADDR=" ";
  this.COMMUNITY=" ";
};

var CShfeFtdcRspQryNetCommunityField = function() {
  this.OperationType=0;
  this.ID=0;
  this.IPADDR=" ";
  this.COMMUNITY=" ";
};

var CShfeFtdcRtnNetCommunityField = function() {
  this.OperationType=0;
  this.ID=0;
  this.IPADDR=" ";
  this.COMMUNITY=" ";
};

var CShfeFtdcReqQryNetPortTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.Description=" ";
};

var CShfeFtdcRspQryNetPortTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.Description=" ";
};

var CShfeFtdcRtnNetPortTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.Description=" ";
};

var CShfeFtdcReqQryNetPartAccessSpotField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRspQryNetPartAccessSpotField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRtnNetPartAccessSpotField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcReqQryNetInterfaceField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.MonitorType_ID=0;
  this.IfType=0;
  this.EName=" ";
  this.IpAddress=" ";
  this.IpMask=" ";
  this.IfStatus=0;
  this.MAC=" ";
  this.DeviceID=0;
  this.DeviceObjectID=" ";
  this.DeviceIndex=" ";
  this.isPolling=0;
  this.Description=" ";
};

var CShfeFtdcRspQryNetInterfaceField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.MonitorType_ID=0;
  this.IfType=0;
  this.EName=" ";
  this.IpAddress=" ";
  this.IpMask=" ";
  this.IfStatus=0;
  this.MAC=" ";
  this.DeviceID=0;
  this.DeviceObjectID=" ";
  this.DeviceIndex=" ";
  this.isPolling=0;
  this.Description=" ";
};

var CShfeFtdcRtnNetInterfaceField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.MonitorType_ID=0;
  this.IfType=0;
  this.EName=" ";
  this.IpAddress=" ";
  this.IpMask=" ";
  this.IfStatus=0;
  this.MAC=" ";
  this.DeviceID=0;
  this.DeviceObjectID=" ";
  this.DeviceIndex=" ";
  this.isPolling=0;
  this.Description=" ";
};

var CShfeFtdcReqQryNetGeneralOIDField = function() {
  this.ID=0;
};

var CShfeFtdcRspQryNetGeneralOIDField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.OID=" ";
  this.Unit=" ";
  this.isTheTable=0;
};

var CShfeFtdcRtnNetGeneralOIDField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.OID=" ";
  this.Unit=" ";
  this.isTheTable=0;
};

var CShfeFtdcReqQryNetMonitorTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRspQryNetMonitorTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRtnNetMonitorTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcReqQryNetMonitorAttrScopeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.Comments=" ";
};

var CShfeFtdcRspQryNetMonitorAttrScopeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.Comments=" ";
};

var CShfeFtdcRtnNetMonitorAttrScopeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.Comments=" ";
};

var CShfeFtdcReqQryNetMonitorAttrTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.MANUFACTORY_ID=0;
  this.MonitorType_ID=0;
  this.AttrType_ID=0;
  this.MANUFACTORY=" ";
  this.MonitorType=" ";
  this.AttrType=" ";
};

var CShfeFtdcRspQryNetMonitorAttrTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.MANUFACTORY_ID=0;
  this.MonitorType_ID=0;
  this.AttrType_ID=0;
  this.MANUFACTORY=" ";
  this.MonitorType=" ";
  this.AttrType=" ";
};

var CShfeFtdcRtnNetMonitorAttrTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.MANUFACTORY_ID=0;
  this.MonitorType_ID=0;
  this.AttrType_ID=0;
  this.MANUFACTORY=" ";
  this.MonitorType=" ";
  this.AttrType=" ";
};

var CShfeFtdcReqQryNetMonitorObjectAttrField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.AttrType=" ";
  this.PolicyTypeID=0;
};

var CShfeFtdcRspQryNetMonitorObjectAttrField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.AttrType=" ";
  this.PolicyTypeID=0;
};

var CShfeFtdcRtnNetMonitorObjectAttrField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.AttrType=" ";
  this.PolicyTypeID=0;
};

var CShfeFtdcReqQryNetFuncAreaField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SysNetSubAreaID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRspQryNetFuncAreaField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SysNetSubAreaID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRtnNetFuncAreaField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SysNetSubAreaID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcReqQryNetMonitorCommandTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.Manufactory_ID=0;
  this.MonitorType_ID=0;
  this.DeviceModle_ID=0;
  this.ActionGroup_ID=0;
  this.Manufactory=" ";
  this.MonitorType=" ";
  this.DeviceModle=" ";
  this.ActionGroup=" ";
  this.Command=" ";
};

var CShfeFtdcRspQryNetMonitorCommandTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.Manufactory_ID=0;
  this.MonitorType_ID=0;
  this.DeviceModle_ID=0;
  this.ActionGroup_ID=0;
  this.Manufactory=" ";
  this.MonitorType=" ";
  this.DeviceModle=" ";
  this.ActionGroup=" ";
  this.Command=" ";
};

var CShfeFtdcRtnNetMonitorCommandTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.Manufactory_ID=0;
  this.MonitorType_ID=0;
  this.DeviceModle_ID=0;
  this.ActionGroup_ID=0;
  this.Manufactory=" ";
  this.MonitorType=" ";
  this.DeviceModle=" ";
  this.ActionGroup=" ";
  this.Command=" ";
};

var CShfeFtdcReqQryNetMonitorActionGroupField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.ActionType=0;
  this.Comments=" ";
};

var CShfeFtdcRspQryNetMonitorActionGroupField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.ActionType=0;
  this.Comments=" ";
};

var CShfeFtdcRtnNetMonitorActionGroupField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.ActionType=0;
  this.Comments=" ";
};

var CShfeFtdcReqQryNetMonitorDeviceGroupField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.Condition=" ";
  this.Comments=" ";
};

var CShfeFtdcRspQryNetMonitorDeviceGroupField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.Condition=" ";
  this.Comments=" ";
};

var CShfeFtdcRtnNetMonitorDeviceGroupField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.Condition=" ";
  this.Comments=" ";
};

var CShfeFtdcReqQryNetMonitorTaskInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.DeviceGroup_ID=0;
  this.ManagerGroup_ID=0;
  this.TimePolicy_ID=0;
  this.TaskPriority_ID=0;
  this.OutputPolicy_ID=0;
  this.ActionGroup_ID=0;
  this.EventExprStr=" ";
  this.DeviceGroup=" ";
  this.ManagerGroup=" ";
  this.TimePolicy=" ";
  this.TaskPriority=" ";
  this.OutputPolicy=" ";
  this.ActionGroup=" ";
  this.ValidFlag=0;
  this.TaskStatus=0;
  this.Comments=" ";
};

var CShfeFtdcRspQryNetMonitorTaskInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.DeviceGroup_ID=0;
  this.ManagerGroup_ID=0;
  this.TimePolicy_ID=0;
  this.TaskPriority_ID=0;
  this.OutputPolicy_ID=0;
  this.ActionGroup_ID=0;
  this.EventExprStr=" ";
  this.DeviceGroup=" ";
  this.ManagerGroup=" ";
  this.TimePolicy=" ";
  this.TaskPriority=" ";
  this.OutputPolicy=" ";
  this.ActionGroup=" ";
  this.ValidFlag=0;
  this.TaskStatus=0;
  this.Comments=" ";
};

var CShfeFtdcRtnNetMonitorTaskInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.DeviceGroup_ID=0;
  this.ManagerGroup_ID=0;
  this.TimePolicy_ID=0;
  this.TaskPriority_ID=0;
  this.OutputPolicy_ID=0;
  this.ActionGroup_ID=0;
  this.EventExprStr=" ";
  this.DeviceGroup=" ";
  this.ManagerGroup=" ";
  this.TimePolicy=" ";
  this.TaskPriority=" ";
  this.OutputPolicy=" ";
  this.ActionGroup=" ";
  this.ValidFlag=0;
  this.TaskStatus=0;
  this.Comments=" ";
};

var CShfeFtdcReqQryNetMonitorTaskResultField = function() {
  this.OperationType=0;
  this.ObjectID=" ";
  this.Task_ID=0;
  this.OperateTime=0;
  this.MonDate=" ";
  this.MonTime=" ";
  this.InstructChain=" ";
  this.ResultChain=" ";
  this.Flag=0;
};

var CShfeFtdcRspQryNetMonitorTaskResultField = function() {
  this.OperationType=0;
  this.ObjectID=" ";
  this.Task_ID=0;
  this.OperateTime=0;
  this.MonDate=" ";
  this.MonTime=" ";
  this.InstructChain=" ";
  this.ResultChain=" ";
  this.Flag=0;
};

var CShfeFtdcRtnNetMonitorTaskResultField = function() {
  this.OperationType=0;
  this.ObjectID=" ";
  this.Task_ID=0;
  this.OperateTime=0;
  this.MonDate=" ";
  this.MonTime=" ";
  this.InstructChain=" ";
  this.ResultChain=" ";
  this.Flag=0;
};

var CShfeFtdcReqQryNetMonitorTaskObjectSetField = function() {
  this.OperationType=0;
  this.ID=0;
  this.DeviceGroup_ID=0;
  this.Device_ID=0;
  this.DataCenter=0;
};

var CShfeFtdcRspQryNetMonitorTaskObjectSetField = function() {
  this.OperationType=0;
  this.ID=0;
  this.DeviceGroup_ID=0;
  this.Device_ID=0;
  this.DataCenter=0;
};

var CShfeFtdcRtnNetMonitorTaskObjectSetField = function() {
  this.OperationType=0;
  this.ID=0;
  this.DeviceGroup_ID=0;
  this.Device_ID=0;
  this.DataCenter=0;
};

var CShfeFtdcReqQryNetPartyLinkInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.MEMBER_NO=" ";
  this.MEMBER_NAME=" ";
  this.REMOTE_ADDR=" ";
  this.LOCAL_ADDR=" ";
  this.ADDRESS=" ";
  this.LINE_STATUS=" ";
  this.CONTACT=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.EMAIL=" ";
  this.FAX=" ";
  this.PROVINCE=" ";
  this.DDN_NO=" ";
  this.IN_MODE=" ";
  this.IP_WAN=" ";
  this.IP_LAN=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.INTERFACE_DATE=" ";
  this.SOFTWARE=" ";
  this.FEE_TYPE=" ";
  this.SERVICEPROVIDER=" ";
  this.IF_ZIYING=" ";
  this.IF_TUOGUAN=" ";
  this.HASOTHER=" ";
  this.SEAT_NO=" ";
  this.PRO=" ";
};

var CShfeFtdcRspQryNetPartyLinkInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.MEMBER_NO=" ";
  this.MEMBER_NAME=" ";
  this.REMOTE_ADDR=" ";
  this.LOCAL_ADDR=" ";
  this.ADDRESS=" ";
  this.LINE_STATUS=" ";
  this.CONTACT=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.EMAIL=" ";
  this.FAX=" ";
  this.PROVINCE=" ";
  this.DDN_NO=" ";
  this.IN_MODE=" ";
  this.IP_WAN=" ";
  this.IP_LAN=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.INTERFACE_DATE=" ";
  this.SOFTWARE=" ";
  this.FEE_TYPE=" ";
  this.SERVICEPROVIDER=" ";
  this.IF_ZIYING=" ";
  this.IF_TUOGUAN=" ";
  this.HASOTHER=" ";
  this.SEAT_NO=" ";
  this.PRO=" ";
};

var CShfeFtdcRtnNetPartyLinkInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.MEMBER_NO=" ";
  this.MEMBER_NAME=" ";
  this.REMOTE_ADDR=" ";
  this.LOCAL_ADDR=" ";
  this.ADDRESS=" ";
  this.LINE_STATUS=" ";
  this.CONTACT=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.EMAIL=" ";
  this.FAX=" ";
  this.PROVINCE=" ";
  this.DDN_NO=" ";
  this.IN_MODE=" ";
  this.IP_WAN=" ";
  this.IP_LAN=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.INTERFACE_DATE=" ";
  this.SOFTWARE=" ";
  this.FEE_TYPE=" ";
  this.SERVICEPROVIDER=" ";
  this.IF_ZIYING=" ";
  this.IF_TUOGUAN=" ";
  this.HASOTHER=" ";
  this.SEAT_NO=" ";
  this.PRO=" ";
};

var CShfeFtdcReqQryNetMonitorActionAttrField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ActionGroup_ID=0;
  this.MonitorAttr_ID=0;
  this.MonitorAttrName=" ";
};

var CShfeFtdcRspQryNetMonitorActionAttrField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ActionGroup_ID=0;
  this.MonitorAttr_ID=0;
  this.MonitorAttrName=" ";
};

var CShfeFtdcRtnNetMonitorActionAttrField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ActionGroup_ID=0;
  this.MonitorAttr_ID=0;
  this.MonitorAttrName=" ";
};

var CShfeFtdcReqQryNetModuleField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.MonitorType_ID=0;
  this.DeviceID=0;
  this.DeviceObjectID=" ";
  this.Name=" ";
  this.Description=" ";
  this.ModuleIndex=0;
  this.EntPhyIndex=0;
};

var CShfeFtdcRspQryNetModuleField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.MonitorType_ID=0;
  this.DeviceID=0;
  this.DeviceObjectID=" ";
  this.Name=" ";
  this.Description=" ";
  this.ModuleIndex=0;
  this.EntPhyIndex=0;
};

var CShfeFtdcRtnNetModuleField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.MonitorType_ID=0;
  this.DeviceID=0;
  this.DeviceObjectID=" ";
  this.Name=" ";
  this.Description=" ";
  this.ModuleIndex=0;
  this.EntPhyIndex=0;
};

var CShfeFtdcReqQryNetEventExprField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CNAME=" ";
  this.ENAME=" ";
  this.WarningLEVEL=" ";
  this.EventTypeID=0;
  this.SubEventTypeID=0;
  this.GIVEUPTIME=0;
  this.CONTROL=" ";
  this.EXPR=" ";
  this.BRIEF=" ";
  this.DISCRIPTION=" ";
  this.MSGGROUP_ID=0;
  this.ADMINGROUP_ID=0;
};

var CShfeFtdcRspQryNetEventExprField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CNAME=" ";
  this.ENAME=" ";
  this.WarningLEVEL=" ";
  this.EventTypeID=0;
  this.SubEventTypeID=0;
  this.GIVEUPTIME=0;
  this.CONTROL=" ";
  this.EXPR=" ";
  this.BRIEF=" ";
  this.DISCRIPTION=" ";
  this.MSGGROUP_ID=0;
  this.ADMINGROUP_ID=0;
};

var CShfeFtdcRtnNetEventExprField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CNAME=" ";
  this.ENAME=" ";
  this.WarningLEVEL=" ";
  this.EventTypeID=0;
  this.SubEventTypeID=0;
  this.GIVEUPTIME=0;
  this.CONTROL=" ";
  this.EXPR=" ";
  this.BRIEF=" ";
  this.DISCRIPTION=" ";
  this.MSGGROUP_ID=0;
  this.ADMINGROUP_ID=0;
};

var CShfeFtdcReqQryNetEventTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRspQryNetEventTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRtnNetEventTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcReqQryNetSubEventTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRspQryNetSubEventTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcRtnNetSubEventTypeField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcReqQryNetEventLevelField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.DISCRIPTION=" ";
};

var CShfeFtdcRspQryNetEventLevelField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.DISCRIPTION=" ";
};

var CShfeFtdcRtnNetEventLevelField = function() {
  this.OperationType=0;
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.DISCRIPTION=" ";
};

var CShfeFtdcReqQryNetMonitorTaskStatusResultField = function() {
  this.OperationType=0;
  this.ObjectID=" ";
  this.Task_ID=0;
  this.OperateTime=0;
  this.MonDate=" ";
  this.MonTime=" ";
  this.Flag=0;
};

var CShfeFtdcRspQryNetMonitorTaskStatusResultField = function() {
  this.OperationType=0;
  this.ObjectID=" ";
  this.Task_ID=0;
  this.OperateTime=0;
  this.MonDate=" ";
  this.MonTime=" ";
  this.Flag=0;
};

var CShfeFtdcRtnNetMonitorTaskStatusResultField = function() {
  this.OperationType=0;
  this.ObjectID=" ";
  this.Task_ID=0;
  this.OperateTime=0;
  this.MonDate=" ";
  this.MonTime=" ";
  this.Flag=0;
};

var CShfeFtdcReqConfigLoginField = function() {
  this.DataCenter=0;
  this.ID=0;
  this.HasConfig=0;
  this.Authorization=" ";
};

var CShfeFtdcRspQryConfigLoginField = function() {
  this.ErrorID=0;
  this.ErrorMsg=" ";
};

var CShfeFtdcRspServerTypeField = function() {
  this.IsMaster=0;
};

var CShfeFtdcReqSysServerExitField = function() {
  this.Time=" ";
  this.Authorization=" ";
};

var CShfeFtdcReqQryNetCfgFileField = function() {
  this.OperationType=0;
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.CfgFileName=" ";
};

var CShfeFtdcRspQryNetCfgFileField = function() {
  this.OperationType=0;
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.CfgFileName=" ";
};

var CShfeFtdcRtnNetCfgFileField = function() {
  this.OperationType=0;
  this.ObjectID=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.CfgFileName=" ";
};

var CShfeFtdcReqQryNetMonitorDeviceTaskField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.IPAddress=" ";
  this.Manufactory_ID=0;
  this.InstructChain=" ";
  this.InstructAlias=" ";
  this.InstructArgs=" ";
  this.DefParamChain=" ";
  this.Flag=0;
};

var CShfeFtdcRspQryNetMonitorDeviceTaskField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.IPAddress=" ";
  this.Manufactory_ID=0;
  this.InstructChain=" ";
  this.InstructAlias=" ";
  this.InstructArgs=" ";
  this.DefParamChain=" ";
  this.Flag=0;
};

var CShfeFtdcRtnNetMonitorDeviceTaskField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ObjectID=" ";
  this.IPAddress=" ";
  this.Manufactory_ID=0;
  this.InstructChain=" ";
  this.InstructAlias=" ";
  this.InstructArgs=" ";
  this.DefParamChain=" ";
  this.Flag=0;
};

var CShfeFtdcReqQryNetMonitorTaskInstAttrsField = function() {
  this.OperationType=0;
  this.ID=0;
  this.Manufactory_ID=0;
  this.InstructAlias=" ";
  this.DEVICETYPE=" ";
  this.AttrsChain=" ";
  this.DefRegularChain=" ";
  this.DefParamChain=" ";
};

var CShfeFtdcRspQryNetMonitorTaskInstAttrsField = function() {
  this.OperationType=0;
  this.ID=0;
  this.Manufactory_ID=0;
  this.InstructAlias=" ";
  this.DEVICETYPE=" ";
  this.AttrsChain=" ";
  this.DefRegularChain=" ";
  this.DefParamChain=" ";
};

var CShfeFtdcRtnNetMonitorTaskInstAttrsField = function() {
  this.OperationType=0;
  this.ID=0;
  this.Manufactory_ID=0;
  this.InstructAlias=" ";
  this.DEVICETYPE=" ";
  this.AttrsChain=" ";
  this.DefRegularChain=" ";
  this.DefParamChain=" ";
};

var CShfeFtdcReqQryFileGeneralOperField = function() {
  this.OperationType=0;
  this.FileName=" ";
  this.Version=" ";
  this.SubVersion=0;
  this.MonDate=" ";
  this.MonTime=" ";
  this.UserName=" ";
  this.OperType=0;
  this.OperResult=0;
  this.Comments=" ";
  this.Offset=0;
  this.Length=0;
  this.FileContent=" ";
};

var CShfeFtdcRspQryFileGeneralOperField = function() {
  this.OperationType=0;
  this.FileName=" ";
  this.Version=" ";
  this.SubVersion=0;
  this.MonDate=" ";
  this.MonTime=" ";
  this.UserName=" ";
  this.OperType=0;
  this.OperResult=0;
  this.Comments=" ";
  this.Offset=0;
  this.Length=0;
  this.FileContent=" ";
};

var CShfeFtdcRtnFileGeneralOperField = function() {
  this.OperationType=0;
  this.FileName=" ";
  this.Version=" ";
  this.SubVersion=0;
  this.MonDate=" ";
  this.MonTime=" ";
  this.UserName=" ";
  this.OperType=0;
  this.OperResult=0;
  this.Comments=" ";
  this.Offset=0;
  this.Length=0;
  this.FileContent=" ";
};

var CShfeFtdcReqQryNetBaseLineField = function() {
  this.OperationType=0;
  this.ID=0;
  this.MANUFACTORY_ID=0;
  this.Name=" ";
  this.SerialUsed=" ";
  this.data=" ";
  this.memo=" ";
  this.Flag=0;
};

var CShfeFtdcRspQryNetBaseLineField = function() {
  this.OperationType=0;
  this.ID=0;
  this.MANUFACTORY_ID=0;
  this.Name=" ";
  this.SerialUsed=" ";
  this.data=" ";
  this.memo=" ";
  this.Flag=0;
};

var CShfeFtdcRtnNetBaseLineField = function() {
  this.OperationType=0;
  this.ID=0;
  this.MANUFACTORY_ID=0;
  this.Name=" ";
  this.SerialUsed=" ";
  this.data=" ";
  this.memo=" ";
  this.Flag=0;
};

var CShfeFtdcReqQryNetBaseLineTaskField = function() {
  this.OperationType=0;
  this.ID=0;
  this.Name=" ";
  this.BaseLineIDList=" ";
  this.DeviceIDList=" ";
  this.GenDate=" ";
  this.GenTime=" ";
  this.GenUser=" ";
  this.memo=" ";
};

var CShfeFtdcRspQryNetBaseLineTaskField = function() {
  this.OperationType=0;
  this.ID=0;
  this.Name=" ";
  this.BaseLineIDList=" ";
  this.DeviceIDList=" ";
  this.GenDate=" ";
  this.GenTime=" ";
  this.GenUser=" ";
  this.memo=" ";
};

var CShfeFtdcRtnNetBaseLineTaskField = function() {
  this.OperationType=0;
  this.ID=0;
  this.Name=" ";
  this.BaseLineIDList=" ";
  this.DeviceIDList=" ";
  this.GenDate=" ";
  this.GenTime=" ";
  this.GenUser=" ";
  this.memo=" ";
};

var CShfeFtdcReqQryNetBaseLineResultField = function() {
  this.OperationType=0;
  this.ID=0;
  this.BaseLineName=" ";
  this.DeviceObjID=" ";
  this.DeviceIP=" ";
  this.Result=" ";
  this.GenDate=" ";
  this.GenTime=" ";
  this.GenUser=" ";
  this.Flag=0;
};

var CShfeFtdcRspQryNetBaseLineResultField = function() {
  this.OperationType=0;
  this.ID=0;
  this.BaseLineName=" ";
  this.DeviceObjID=" ";
  this.DeviceIP=" ";
  this.Result=" ";
  this.GenDate=" ";
  this.GenTime=" ";
  this.GenUser=" ";
  this.Flag=0;
};

var CShfeFtdcRtnNetBaseLineResultField = function() {
  this.OperationType=0;
  this.ID=0;
  this.BaseLineName=" ";
  this.DeviceObjID=" ";
  this.DeviceIP=" ";
  this.Result=" ";
  this.GenDate=" ";
  this.GenTime=" ";
  this.GenUser=" ";
  this.Flag=0;
};

var CShfeFtdcReqQryNetPartyLinkStatusInfoField = function() {
  this.OperationType=0;
  this.KeyCompare=0;
  this.KeyName=" ";
  this.KeyValue=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.SEAT_NO=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.status=" ";
};

var CShfeFtdcRspQryNetPartyLinkStatusInfoField = function() {
  this.OperationType=0;
  this.MonDate=" ";
  this.MonTime=" ";
  this.SEAT_NO=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.status=" ";
};

var CShfeFtdcRtnNetPartyLinkStatusInfoField = function() {
  this.OperationType=0;
  this.MonDate=" ";
  this.MonTime=" ";
  this.SEAT_NO=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.status=" ";
};

var CShfeFtdcReqQryNetMemberSDHLineInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SeqNo=0;
  this.MemContractNo=" ";
  this.ApplyPerson=" ";
  this.MonthlyRental=0;
  this.MemberNo=" ";
  this.ParticipantName=" ";
  this.ClientManager=" ";
  this.Bandwidth=" ";
  this.InterfaceType=" ";
  this.RemoteCircuit=" ";
  this.LocalCircuit=" ";
  this.Remark=" ";
  this.EndALineAddress=" ";
  this.EndAContact=" ";
  this.EndZLineAddress=" ";
  this.ContactName=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.PROVINCE=" ";
  this.StartPortID=" ";
  this.StartJump=" ";
  this.LINE_STATUS=" ";
  this.DataCenterID=0;
};

var CShfeFtdcRspQryNetMemberSDHLineInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SeqNo=0;
  this.MemContractNo=" ";
  this.ApplyPerson=" ";
  this.MonthlyRental=0;
  this.MemberNo=" ";
  this.ParticipantName=" ";
  this.ClientManager=" ";
  this.Bandwidth=" ";
  this.InterfaceType=" ";
  this.RemoteCircuit=" ";
  this.LocalCircuit=" ";
  this.Remark=" ";
  this.EndALineAddress=" ";
  this.EndAContact=" ";
  this.EndZLineAddress=" ";
  this.ContactName=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.PROVINCE=" ";
  this.StartPortID=" ";
  this.StartJump=" ";
  this.LINE_STATUS=" ";
  this.DataCenterID=0;
};

var CShfeFtdcRtnNetMemberSDHLineInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SeqNo=0;
  this.MemContractNo=" ";
  this.ApplyPerson=" ";
  this.MonthlyRental=0;
  this.MemberNo=" ";
  this.ParticipantName=" ";
  this.ClientManager=" ";
  this.Bandwidth=" ";
  this.InterfaceType=" ";
  this.RemoteCircuit=" ";
  this.LocalCircuit=" ";
  this.Remark=" ";
  this.EndALineAddress=" ";
  this.EndAContact=" ";
  this.EndZLineAddress=" ";
  this.ContactName=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.PROVINCE=" ";
  this.StartPortID=" ";
  this.StartJump=" ";
  this.LINE_STATUS=" ";
  this.DataCenterID=0;
};

var CShfeFtdcReqQryNetDDNLinkInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ClientName=" ";
  this.DDN_NO=" ";
  this.BusinessUnit=" ";
  this.Bandwidth=" ";
  this.EndAAddress=" ";
  this.EndAContactName=" ";
  this.EndZAddress=" ";
  this.EndZContactName=" ";
};

var CShfeFtdcRspQryNetDDNLinkInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ClientName=" ";
  this.DDN_NO=" ";
  this.BusinessUnit=" ";
  this.Bandwidth=" ";
  this.EndAAddress=" ";
  this.EndAContactName=" ";
  this.EndZAddress=" ";
  this.EndZContactName=" ";
};

var CShfeFtdcRtnNetDDNLinkInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ClientName=" ";
  this.DDN_NO=" ";
  this.BusinessUnit=" ";
  this.Bandwidth=" ";
  this.EndAAddress=" ";
  this.EndAContactName=" ";
  this.EndZAddress=" ";
  this.EndZContactName=" ";
};

var CShfeFtdcReqQryNetPseudMemberLinkInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SeqNo=0;
  this.MemContractNo=" ";
  this.LineUsage=" ";
  this.LocalCircuit=" ";
  this.RemoteCircuit=" ";
  this.BusinessUnit=" ";
  this.Bandwidth=" ";
  this.ApplyPerson=" ";
  this.MonthlyRental=0;
  this.EndAAddress=" ";
  this.EndAContactName=" ";
  this.EndZAddress=" ";
  this.EndZContactName=" ";
  this.Telephone=" ";
  this.LineInfo=" ";
  this.IPADDR=" ";
};

var CShfeFtdcRspQryNetPseudMemberLinkInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SeqNo=0;
  this.MemContractNo=" ";
  this.LineUsage=" ";
  this.LocalCircuit=" ";
  this.RemoteCircuit=" ";
  this.BusinessUnit=" ";
  this.Bandwidth=" ";
  this.ApplyPerson=" ";
  this.MonthlyRental=0;
  this.EndAAddress=" ";
  this.EndAContactName=" ";
  this.EndZAddress=" ";
  this.EndZContactName=" ";
  this.Telephone=" ";
  this.LineInfo=" ";
  this.IPADDR=" ";
};

var CShfeFtdcRtnNetPseudMemberLinkInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SeqNo=0;
  this.MemContractNo=" ";
  this.LineUsage=" ";
  this.LocalCircuit=" ";
  this.RemoteCircuit=" ";
  this.BusinessUnit=" ";
  this.Bandwidth=" ";
  this.ApplyPerson=" ";
  this.MonthlyRental=0;
  this.EndAAddress=" ";
  this.EndAContactName=" ";
  this.EndZAddress=" ";
  this.EndZContactName=" ";
  this.Telephone=" ";
  this.LineInfo=" ";
  this.IPADDR=" ";
};

var CShfeFtdcReqQryOuterDeviceInfField = function() {
  this.OperationType=0;
  this.ID=0;
  this.IPADDR=" ";
  this.NAME=" ";
  this.memo=" ";
};

var CShfeFtdcRspQryOuterDeviceInfField = function() {
  this.OperationType=0;
  this.ID=0;
  this.IPADDR=" ";
  this.NAME=" ";
  this.memo=" ";
};

var CShfeFtdcRtnNetOuterDeviceInfField = function() {
  this.OperationType=0;
  this.ID=0;
  this.IPADDR=" ";
  this.NAME=" ";
  this.memo=" ";
};

var CShfeFtdcReqQryNetLocalPingResultInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SouIPADDR=" ";
  this.SouNAME=" ";
  this.TarIPADDR=" ";
  this.TarNAME=" ";
  this.PDateSta=" ";
  this.PTimeSta=" ";
  this.ConnRate=0;
};

var CShfeFtdcRspQryNetLocalPingResultInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SouIPADDR=" ";
  this.SouNAME=" ";
  this.TarIPADDR=" ";
  this.TarNAME=" ";
  this.PDateSta=" ";
  this.PTimeSta=" ";
  this.ConnRate=0;
};

var CShfeFtdcRtnNetLocalPingResultInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SouIPADDR=" ";
  this.SouNAME=" ";
  this.TarIPADDR=" ";
  this.TarNAME=" ";
  this.PDateSta=" ";
  this.PTimeSta=" ";
  this.ConnRate=0;
};

var CShfeFtdcReqQryNetRomotePingResultInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SouIPADDR=" ";
  this.SouNAME=" ";
  this.TarIPADDR=" ";
  this.TarNAME=" ";
  this.PDateSta=" ";
  this.PTimeSta=" ";
  this.ConnRate=0;
  this.TimeDlyMin=" ";
  this.TimeDlyMax=" ";
  this.TimeDlyAvg=" ";
};

var CShfeFtdcRspQryNetRomotePingResultInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SouIPADDR=" ";
  this.SouNAME=" ";
  this.TarIPADDR=" ";
  this.TarNAME=" ";
  this.PDateSta=" ";
  this.PTimeSta=" ";
  this.ConnRate=0;
  this.TimeDlyMin=" ";
  this.TimeDlyMax=" ";
  this.TimeDlyAvg=" ";
};

var CShfeFtdcRtnNetRomotePingResultInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.SouIPADDR=" ";
  this.SouNAME=" ";
  this.TarIPADDR=" ";
  this.TarNAME=" ";
  this.PDateSta=" ";
  this.PTimeSta=" ";
  this.ConnRate=0;
  this.TimeDlyMin=" ";
  this.TimeDlyMax=" ";
  this.TimeDlyAvg=" ";
};

var CShfeFtdcRtnMonitorTopProcessInfoField = function() {
  this.HostName=" ";
  this.MonDate=" ";
  this.MonTime=" ";
  this.CPU=" ";
  this.TTY=" ";
  this.PID=0;
  this.USERNAME=" ";
  this.PRI=0;
  this.NI=0;
  this.SSIZE=0;
  this.RES=0;
  this.STATE=" ";
  this.STIME=" ";
  this.pWCPU=0;
  this.pCPU=0;
  this.COMMAND=" ";
};

var CShfeFtdcReqQrySysInternalTopologyField = function() {
  this.InfoType=" ";
  this.Node1_ID=" ";
  this.Node1_Info=" ";
  this.LinkInfo=" ";
  this.LinkState=" ";
  this.Node2_ID=" ";
  this.Node2_Info=" ";
};

var CShfeFtdcRspQrySysInternalTopologyField = function() {
  this.InfoType=" ";
  this.Node1_ID=" ";
  this.Node1_Info=" ";
  this.LinkInfo=" ";
  this.LinkState=" ";
  this.Node2_ID=" ";
  this.Node2_Info=" ";
};

var CShfeFtdcRtnSysInternalTopologyField = function() {
  this.InfoType=" ";
  this.Node1_ID=" ";
  this.Node1_Info=" ";
  this.LinkInfo=" ";
  this.LinkState=" ";
  this.Node2_ID=" ";
  this.Node2_Info=" ";
};

var CShfeFtdcReqQryMemberLinkCostField = function() {
  this.ID=0;
  this.ParticipantName=" ";
  this.DDN_NO=" ";
  this.ServiceProvider=" ";
  this.Pay_Date=" ";
  this.B_Pay_Date=" ";
  this.D_Pay_Date=" ";
  this.Charge=0;
  this.Fee_Type=" ";
  this.Pro=" ";
};

var CShfeFtdcRspQryMemberLinkCostField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ParticipantName=" ";
  this.DDN_NO=" ";
  this.ServiceProvider=" ";
  this.Pay_Date=" ";
  this.B_Pay_Date=" ";
  this.D_Pay_Date=" ";
  this.Charge=0;
  this.Fee_Type=" ";
  this.Pro=" ";
};

var CShfeFtdcRtnMemberLinkCostField = function() {
  this.OperationType=0;
  this.ID=0;
  this.ParticipantName=" ";
  this.DDN_NO=" ";
  this.ServiceProvider=" ";
  this.Pay_Date=" ";
  this.B_Pay_Date=" ";
  this.D_Pay_Date=" ";
  this.Charge=0;
  this.Fee_Type=" ";
  this.Pro=" ";
};

var CShfeFtdcReqQryNetPartylinkMonthlyRentField = function() {
  this.OperationType=0;
  this.ID=0;
  this.LineName=" ";
  this.DDN_NO=" ";
  this.ServiceProvider=" ";
  this.MonthlyRental=0;
  this.Remark=" ";
};

var CShfeFtdcRspQryNetPartylinkMonthlyRentField = function() {
  this.OperationType=0;
  this.ID=0;
  this.LineName=" ";
  this.DDN_NO=" ";
  this.ServiceProvider=" ";
  this.MonthlyRental=0;
  this.Remark=" ";
};

var CShfeFtdcRtnNetPartylinkMonthlyRentField = function() {
  this.OperationType=0;
  this.ID=0;
  this.LineName=" ";
  this.DDN_NO=" ";
  this.ServiceProvider=" ";
  this.MonthlyRental=0;
  this.Remark=" ";
};

var CShfeFtdcReqQryNetNonPartyLinkInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.MEMBER_NO=" ";
  this.MEMBER_NAME=" ";
  this.REMOTE_ADDR=" ";
  this.LOCAL_ADDR=" ";
  this.ADDRESS=" ";
  this.LINE_STATUS=" ";
  this.CONTACT=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.EMAIL=" ";
  this.FAX=" ";
  this.PROVINCE=" ";
  this.DDN_NO=" ";
  this.IN_MODE=" ";
  this.IP_WAN=" ";
  this.IP_LAN=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.INTERFACE_DATE=" ";
  this.SOFTWARE=" ";
  this.FEE_TYPE=" ";
  this.SERVICEPROVIDER=" ";
  this.IF_ZIYING=" ";
  this.IF_TUOGUAN=" ";
  this.HASOTHER=" ";
  this.SEAT_NO=" ";
  this.PRO=" ";
};

var CShfeFtdcRspQryNetNonPartyLinkInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.MEMBER_NO=" ";
  this.MEMBER_NAME=" ";
  this.REMOTE_ADDR=" ";
  this.LOCAL_ADDR=" ";
  this.ADDRESS=" ";
  this.LINE_STATUS=" ";
  this.CONTACT=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.EMAIL=" ";
  this.FAX=" ";
  this.PROVINCE=" ";
  this.DDN_NO=" ";
  this.IN_MODE=" ";
  this.IP_WAN=" ";
  this.IP_LAN=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.INTERFACE_DATE=" ";
  this.SOFTWARE=" ";
  this.FEE_TYPE=" ";
  this.SERVICEPROVIDER=" ";
  this.IF_ZIYING=" ";
  this.IF_TUOGUAN=" ";
  this.HASOTHER=" ";
  this.SEAT_NO=" ";
  this.PRO=" ";
};

var CShfeFtdcRtnNetNonPartyLinkInfoField = function() {
  this.OperationType=0;
  this.ID=0;
  this.MEMBER_NO=" ";
  this.MEMBER_NAME=" ";
  this.REMOTE_ADDR=" ";
  this.LOCAL_ADDR=" ";
  this.ADDRESS=" ";
  this.LINE_STATUS=" ";
  this.CONTACT=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.EMAIL=" ";
  this.FAX=" ";
  this.PROVINCE=" ";
  this.DDN_NO=" ";
  this.IN_MODE=" ";
  this.IP_WAN=" ";
  this.IP_LAN=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.INTERFACE_DATE=" ";
  this.SOFTWARE=" ";
  this.FEE_TYPE=" ";
  this.SERVICEPROVIDER=" ";
  this.IF_ZIYING=" ";
  this.IF_TUOGUAN=" ";
  this.HASOTHER=" ";
  this.SEAT_NO=" ";
  this.PRO=" ";
};

var CShfeFtdcSysNetAreaField = function() {
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcSysNetSubAreaField = function() {
  this.ID=0;
  this.SysNetAreaID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcSysNetSubAreaIPField = function() {
  this.ID=0;
  this.SysNetSubAreaID=0;
  this.IP=" ";
  this.Mask=" ";
};

var CShfeFtdcSysNetDeviceTypeField = function() {
  this.ID=0;
  this.Manufactory=" ";
  this.DeviceType=" ";
};

var CShfeFtdcSysNetOIDField = function() {
  this.ID=0;
  this.Manufactory=" ";
  this.DeviceType=" ";
  this.CName=" ";
  this.EName=" ";
  this.OID=" ";
  this.Unit=" ";
  this.isTheTable=0;
};

var CShfeFtdcSysNetTimePolicyField = function() {
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.PolicyType=0;
  this.PolicyString=" ";
  this.TradingDay=0;
  this.Description=" ";
  this.Operation=0;
};

var CShfeFtdcSysNetGatherTaskField = function() {
  this.ID=0;
  this.ObjectID=" ";
  this.AttrType=" ";
  this.PolicyTypeID=0;
  this.DataType=0;
  this.TypeFlag=0;
};

var CShfeFtdcSysNetDeviceCategoryField = function() {
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcSysNetManufactoryField = function() {
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcSysNetCommunityField = function() {
  this.ID=0;
  this.IPADDR=" ";
  this.COMMUNITY=" ";
};

var CShfeFtdcSysNetGeneralOIDField = function() {
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.OID=" ";
  this.Unit=" ";
  this.isTheTable=0;
};

var CShfeFtdcSysNetDeviceLinkedField = function() {
  this.ID=0;
  this.NetDeviceID=0;
  this.NetPortID=0;
  this.NetObjectID=" ";
  this.NetPortType=" ";
  this.LinkNetDeviceID=0;
  this.LinkNetPortID=0;
  this.LinkNetObjectID=" ";
  this.LinkNetPortType=" ";
  this.LinkSource=0;
};

var CShfeFtdcSysNetDeviceField = function() {
  this.ID=0;
  this.ObjectID=" ";
  this.MonitorType_ID=0;
  this.SysNetSubAreaID=0;
  this.CATEGORY_ID=0;
  this.FuctionArea=" ";
  this.IPADDR=" ";
  this.IPDECODE=0;
  this.NAME=" ";
  this.PORTNUMBER=0;
  this.CONFIGFILE=" ";
  this.RCOMMUNITY=" ";
  this.SNMPVERSION=0;
  this.RAMSIZE=0;
  this.FLASHSIZE=0;
  this.NVRAMSIZE=0;
  this.CABINET_ID=0;
  this.ROOM_ID=0;
  this.IOSVERSION_ID=0;
  this.DESCRIPTION=" ";
  this.USERNAME=" ";
  this.PASSWD=" ";
  this.ENPASSWD=" ";
  this.MANUFACTORY_ID=0;
  this.CFGSAVETYPE=0;
  this.DEVICETYPE=" ";
  this.SENDSMS=0;
  this.ISSNMP=0;
  this.SLOTNUM=0;
  this.ISPING=0;
  this.IFNUM=0;
  this.APPLICATION_ID=0;
};

var CShfeFtdcSysNetInterfaceField = function() {
  this.ID=0;
  this.ObjectID=" ";
  this.MonitorType_ID=0;
  this.IfType=0;
  this.EName=" ";
  this.IpAddress=" ";
  this.IpMask=" ";
  this.IfStatus=0;
  this.MAC=" ";
  this.DeviceID=0;
  this.DeviceObjectID=" ";
  this.DeviceIndex=" ";
  this.isPolling=0;
  this.Description=" ";
};

var CShfeFtdcSysNetMonitorTypeField = function() {
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcSysNetMonitorAttrScopeField = function() {
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.Comments=" ";
};

var CShfeFtdcSysNetMonitorAttrTypeField = function() {
  this.ID=0;
  this.MANUFACTORY_ID=0;
  this.MonitorType_ID=0;
  this.AttrType_ID=0;
  this.MANUFACTORY=" ";
  this.MonitorType=" ";
  this.AttrType=" ";
};

var CShfeFtdcSysNetMonitorObjectAttrField = function() {
  this.ID=0;
  this.ObjectID=" ";
  this.AttrType=" ";
  this.PolicyTypeID=0;
};

var CShfeFtdcSysNetFuncAreaField = function() {
  this.ID=0;
  this.SysNetSubAreaID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcSysNetMonitorCommandTypeField = function() {
  this.ID=0;
  this.Manufactory_ID=0;
  this.MonitorType_ID=0;
  this.DeviceModle_ID=0;
  this.ActionGroup_ID=0;
  this.Manufactory=" ";
  this.MonitorType=" ";
  this.DeviceModle=" ";
  this.ActionGroup=" ";
  this.Command=" ";
};

var CShfeFtdcSysNetMonitorActionGroupField = function() {
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.ActionType=0;
  this.Comments=" ";
};

var CShfeFtdcSysNetMonitorDeviceGroupField = function() {
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.Condition=" ";
  this.Comments=" ";
};

var CShfeFtdcSysNetMonitorTaskInfoField = function() {
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.DeviceGroup_ID=0;
  this.ManagerGroup_ID=0;
  this.TimePolicy_ID=0;
  this.TaskPriority_ID=0;
  this.OutputPolicy_ID=0;
  this.ActionGroup_ID=0;
  this.EventExprStr=" ";
  this.DeviceGroup=" ";
  this.ManagerGroup=" ";
  this.TimePolicy=" ";
  this.TaskPriority=" ";
  this.OutputPolicy=" ";
  this.ActionGroup=" ";
  this.ValidFlag=0;
  this.TaskStatus=0;
  this.Comments=" ";
};

var CShfeFtdcSysNetDeviceChgField = function() {
  this.DeviceID=0;
  this.SysNetSubAreaID=0;
  this.OldObjectID=" ";
  this.NewObjectID=" ";
};

var CShfeFtdcSysNetMonitorTaskResultField = function() {
  this.ObjectID=" ";
  this.Task_ID=0;
  this.OperateTime=0;
  this.MonDate=" ";
  this.MonTime=" ";
  this.InstructChain=" ";
  this.ResultChain=" ";
  this.Flag=0;
};

var CShfeFtdcSysNetMonitorTaskObjectSetField = function() {
  this.ID=0;
  this.DeviceGroup_ID=0;
  this.Device_ID=0;
  this.DataCenter=0;
};

var CShfeFtdcSysNetPartyLinkInfoField = function() {
  this.ID=0;
  this.MEMBER_NO=" ";
  this.MEMBER_NAME=" ";
  this.REMOTE_ADDR=" ";
  this.LOCAL_ADDR=" ";
  this.ADDRESS=" ";
  this.LINE_STATUS=" ";
  this.CONTACT=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.EMAIL=" ";
  this.FAX=" ";
  this.PROVINCE=" ";
  this.DDN_NO=" ";
  this.IN_MODE=" ";
  this.IP_WAN=" ";
  this.IP_LAN=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.INTERFACE_DATE=" ";
  this.SOFTWARE=" ";
  this.FEE_TYPE=" ";
  this.SERVICEPROVIDER=" ";
  this.IF_ZIYING=" ";
  this.IF_TUOGUAN=" ";
  this.HASOTHER=" ";
  this.SEAT_NO=" ";
  this.PRO=" ";
};

var CShfeFtdcSysNetMonitorActionAttrField = function() {
  this.ID=0;
  this.ActionGroup_ID=0;
  this.MonitorAttr_ID=0;
  this.MonitorAttrName=" ";
};

var CShfeFtdcSysNetModuleField = function() {
  this.ID=0;
  this.ObjectID=" ";
  this.MonitorType_ID=0;
  this.DeviceID=0;
  this.DeviceObjectID=" ";
  this.Name=" ";
  this.Description=" ";
  this.ModuleIndex=0;
  this.EntPhyIndex=0;
};

var CShfeFtdcSysNetEventExprField = function() {
  this.ID=0;
  this.CNAME=" ";
  this.ENAME=" ";
  this.WarningLEVEL=" ";
  this.EventTypeID=0;
  this.SubEventTypeID=0;
  this.GIVEUPTIME=0;
  this.CONTROL=" ";
  this.EXPR=" ";
  this.BRIEF=" ";
  this.DISCRIPTION=" ";
  this.MSGGROUP_ID=0;
  this.ADMINGROUP_ID=0;
};

var CShfeFtdcSysNetEventTypeField = function() {
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcSysNetSubEventTypeField = function() {
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
};

var CShfeFtdcSysNetEventLevelField = function() {
  this.ID=0;
  this.CName=" ";
  this.EName=" ";
  this.DISCRIPTION=" ";
};

var CShfeFtdcSysNetMonitorDeviceTaskField = function() {
  this.ID=0;
  this.ObjectID=" ";
  this.IPAddress=" ";
  this.Manufactory_ID=0;
  this.InstructChain=" ";
  this.InstructAlias=" ";
  this.InstructArgs=" ";
  this.DefParamChain=" ";
  this.Flag=0;
};

var CShfeFtdcSysNetMonitorTaskInstAttrsField = function() {
  this.ID=0;
  this.Manufactory_ID=0;
  this.InstructAlias=" ";
  this.DEVICETYPE=" ";
  this.AttrsChain=" ";
  this.DefRegularChain=" ";
  this.DefParamChain=" ";
};

var CShfeFtdcSysNetBaseLineField = function() {
  this.ID=0;
  this.MANUFACTORY_ID=0;
  this.Name=" ";
  this.SerialUsed=" ";
  this.data=" ";
  this.memo=" ";
  this.Flag=0;
};

var CShfeFtdcSysNetBaseLineTaskField = function() {
  this.ID=0;
  this.Name=" ";
  this.BaseLineIDList=" ";
  this.DeviceIDList=" ";
  this.GenDate=" ";
  this.GenTime=" ";
  this.GenUser=" ";
  this.memo=" ";
};

var CShfeFtdcSysNetBaseLineResultField = function() {
  this.ID=0;
  this.BaseLineName=" ";
  this.DeviceObjID=" ";
  this.DeviceIP=" ";
  this.Result=" ";
  this.GenDate=" ";
  this.GenTime=" ";
  this.GenUser=" ";
  this.Flag=0;
};

var CShfeFtdcSysNetPartyLinkStatusInfoField = function() {
  this.MonDate=" ";
  this.MonTime=" ";
  this.SEAT_NO=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.status=" ";
};

var CShfeFtdcSysNetMemberSDHLineInfoField = function() {
  this.ID=0;
  this.SeqNo=0;
  this.MemContractNo=" ";
  this.ApplyPerson=" ";
  this.MonthlyRental=0;
  this.MemberNo=" ";
  this.ParticipantName=" ";
  this.ClientManager=" ";
  this.Bandwidth=" ";
  this.InterfaceType=" ";
  this.RemoteCircuit=" ";
  this.LocalCircuit=" ";
  this.Remark=" ";
  this.EndALineAddress=" ";
  this.EndAContact=" ";
  this.EndZLineAddress=" ";
  this.ContactName=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.PROVINCE=" ";
  this.StartPortID=" ";
  this.StartJump=" ";
  this.LINE_STATUS=" ";
  this.DataCenterID=0;
};

var CShfeFtdcSysNetDDNLinkInfoField = function() {
  this.ID=0;
  this.ClientName=" ";
  this.DDN_NO=" ";
  this.BusinessUnit=" ";
  this.Bandwidth=" ";
  this.EndAAddress=" ";
  this.EndAContactName=" ";
  this.EndZAddress=" ";
  this.EndZContactName=" ";
};

var CShfeFtdcSysNetPseudMemberLinkInfoField = function() {
  this.ID=0;
  this.SeqNo=0;
  this.MemContractNo=" ";
  this.LineUsage=" ";
  this.LocalCircuit=" ";
  this.RemoteCircuit=" ";
  this.BusinessUnit=" ";
  this.Bandwidth=" ";
  this.ApplyPerson=" ";
  this.MonthlyRental=0;
  this.EndAAddress=" ";
  this.EndAContactName=" ";
  this.EndZAddress=" ";
  this.EndZContactName=" ";
  this.Telephone=" ";
  this.LineInfo=" ";
  this.IPADDR=" ";
};

var CShfeFtdcSysNetMonitorDeviceTask2Field = function() {
  this.ID=0;
  this.ObjectID=" ";
  this.IPAddress=" ";
  this.Manufactory_ID=0;
  this.InstructChain=" ";
  this.InstructAlias=" ";
  this.InstructArgs=" ";
  this.DefParamChain=" ";
  this.Flag=0;
  this.SecondID=0;
};

var CShfeFtdcSysNetOuterDeviceInfoField = function() {
  this.ID=0;
  this.IPADDR=" ";
  this.NAME=" ";
  this.memo=" ";
};

var CShfeFtdcSysLocalPingResultInfoField = function() {
  this.ID=0;
  this.SouIPADDR=" ";
  this.SouNAME=" ";
  this.TarIPADDR=" ";
  this.TarNAME=" ";
  this.PDateSta=" ";
  this.PTimeSta=" ";
  this.ConnRate=0;
};

var CShfeFtdcSysRomotePingResultInfoField = function() {
  this.ID=0;
  this.SouIPADDR=" ";
  this.SouNAME=" ";
  this.TarIPADDR=" ";
  this.TarNAME=" ";
  this.PDateSta=" ";
  this.PTimeSta=" ";
  this.ConnRate=0;
  this.TimeDlyMin=" ";
  this.TimeDlyMax=" ";
  this.TimeDlyAvg=" ";
};

var CShfeFtdcSysNetDelPartyLinkInfoField = function() {
  this.ID=0;
  this.MEMBER_NO=" ";
  this.MEMBER_NAME=" ";
  this.REMOTE_ADDR=" ";
  this.LOCAL_ADDR=" ";
  this.ADDRESS=" ";
  this.LINE_STATUS=" ";
  this.CONTACT=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.EMAIL=" ";
  this.FAX=" ";
  this.PROVINCE=" ";
  this.DDN_NO=" ";
  this.IN_MODE=" ";
  this.IP_WAN=" ";
  this.IP_LAN=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.INTERFACE_DATE=" ";
  this.SOFTWARE=" ";
  this.FEE_TYPE=" ";
  this.SERVICEPROVIDER=" ";
  this.IF_ZIYING=" ";
  this.IF_TUOGUAN=" ";
  this.HASOTHER=" ";
  this.SEAT_NO=" ";
  this.PRO=" ";
};

var CShfeFtdcSysNetPartyLinkAddrChangeField = function() {
  this.ID=0;
  this.RelationID=0;
  this.OLDADDRESS=" ";
  this.NEWADDRESS=" ";
  this.OPERATOR=" ";
  this.MonDate=" ";
  this.MonTime=" ";
};

var CShfeFtdcSysInternalTopologyField = function() {
  this.InfoType=" ";
  this.Node1_ID=" ";
  this.Node1_Info=" ";
  this.LinkInfo=" ";
  this.LinkState=" ";
  this.Node2_ID=" ";
  this.Node2_Info=" ";
};

var CShfeFtdcSysMemberLinkCostField = function() {
  this.ID=0;
  this.ParticipantName=" ";
  this.DDN_NO=" ";
  this.ServiceProvider=" ";
  this.Pay_Date=" ";
  this.B_Pay_Date=" ";
  this.D_Pay_Date=" ";
  this.Charge=0;
  this.Fee_Type=" ";
  this.Pro=" ";
};

var CShfeFtdcSysNetPartylinkMonthlyRentField = function() {
  this.ID=0;
  this.LineName=" ";
  this.DDN_NO=" ";
  this.ServiceProvider=" ";
  this.MonthlyRental=0;
  this.Remark=" ";
};

var CShfeFtdcSysNetNonPartyLinkInfoField = function() {
  this.ID=0;
  this.MEMBER_NO=" ";
  this.MEMBER_NAME=" ";
  this.REMOTE_ADDR=" ";
  this.LOCAL_ADDR=" ";
  this.ADDRESS=" ";
  this.LINE_STATUS=" ";
  this.CONTACT=" ";
  this.TELEPHONE=" ";
  this.MOBILEPHONE=" ";
  this.EMAIL=" ";
  this.FAX=" ";
  this.PROVINCE=" ";
  this.DDN_NO=" ";
  this.IN_MODE=" ";
  this.IP_WAN=" ";
  this.IP_LAN=" ";
  this.IPADDR=" ";
  this.Interface=" ";
  this.INTERFACE_DATE=" ";
  this.SOFTWARE=" ";
  this.FEE_TYPE=" ";
  this.SERVICEPROVIDER=" ";
  this.IF_ZIYING=" ";
  this.IF_TUOGUAN=" ";
  this.HASOTHER=" ";
  this.SEAT_NO=" ";
  this.PRO=" ";
};

exports.CShfeFtdcDisseminationField = CShfeFtdcDisseminationField;

exports.CShfeFtdcRspInfoField = CShfeFtdcRspInfoField;

exports.CShfeFtdcCommPhaseField = CShfeFtdcCommPhaseField;

exports.CShfeFtdcExchangeTradingDayField = CShfeFtdcExchangeTradingDayField;

exports.CShfeFtdcSettlementSessionField = CShfeFtdcSettlementSessionField;

exports.CShfeFtdcCurrentTimeField = CShfeFtdcCurrentTimeField;

exports.CShfeFtdcReqUserLoginField = CShfeFtdcReqUserLoginField;

exports.CShfeFtdcRspUserLoginField = CShfeFtdcRspUserLoginField;

exports.CShfeFtdcReqUserLogoutField = CShfeFtdcReqUserLogoutField;

exports.CShfeFtdcRspUserLogoutField = CShfeFtdcRspUserLogoutField;

exports.CShfeFtdcInputOrderField = CShfeFtdcInputOrderField;

exports.CShfeFtdcOrderActionField = CShfeFtdcOrderActionField;

exports.CShfeFtdcOTCOrderField = CShfeFtdcOTCOrderField;

exports.CShfeFtdcOrderSessionField = CShfeFtdcOrderSessionField;

exports.CShfeFtdcInputQuoteField = CShfeFtdcInputQuoteField;

exports.CShfeFtdcQuoteActionField = CShfeFtdcQuoteActionField;

exports.CShfeFtdcInputExecOrderField = CShfeFtdcInputExecOrderField;

exports.CShfeFtdcExecOrderActionField = CShfeFtdcExecOrderActionField;

exports.CShfeFtdcUserLogoutField = CShfeFtdcUserLogoutField;

exports.CShfeFtdcUserPasswordUpdateField = CShfeFtdcUserPasswordUpdateField;

exports.CShfeFtdcInputCombOrderField = CShfeFtdcInputCombOrderField;

exports.CShfeFtdcForceUserExitField = CShfeFtdcForceUserExitField;

exports.CShfeFtdcAccountDepositField = CShfeFtdcAccountDepositField;

exports.CShfeFtdcQryOrderField = CShfeFtdcQryOrderField;

exports.CShfeFtdcQryQuoteField = CShfeFtdcQryQuoteField;

exports.CShfeFtdcQryTradeField = CShfeFtdcQryTradeField;

exports.CShfeFtdcQryMarketDataField = CShfeFtdcQryMarketDataField;

exports.CShfeFtdcQryClientField = CShfeFtdcQryClientField;

exports.CShfeFtdcQryPartPositionField = CShfeFtdcQryPartPositionField;

exports.CShfeFtdcQryClientPositionField = CShfeFtdcQryClientPositionField;

exports.CShfeFtdcQryPartAccountField = CShfeFtdcQryPartAccountField;

exports.CShfeFtdcQryInstrumentField = CShfeFtdcQryInstrumentField;

exports.CShfeFtdcQryInstrumentStatusField = CShfeFtdcQryInstrumentStatusField;

exports.CShfeFtdcQrySGDataSyncStatusField = CShfeFtdcQrySGDataSyncStatusField;

exports.CShfeFtdcQryUserSessionField = CShfeFtdcQryUserSessionField;

exports.CShfeFtdcQryUserField = CShfeFtdcQryUserField;

exports.CShfeFtdcQryBulletinField = CShfeFtdcQryBulletinField;

exports.CShfeFtdcQryParticipantField = CShfeFtdcQryParticipantField;

exports.CShfeFtdcQryHedgeVolumeField = CShfeFtdcQryHedgeVolumeField;

exports.CShfeFtdcQryMBLMarketDataField = CShfeFtdcQryMBLMarketDataField;

exports.CShfeFtdcQryCreditLimitField = CShfeFtdcQryCreditLimitField;

exports.CShfeFtdcQryExecOrderField = CShfeFtdcQryExecOrderField;

exports.CShfeFtdcQryCombOrderField = CShfeFtdcQryCombOrderField;

exports.CShfeFtdcRspPartAccountField = CShfeFtdcRspPartAccountField;

exports.CShfeFtdcRspPartPositionField = CShfeFtdcRspPartPositionField;

exports.CShfeFtdcRspClientPositionField = CShfeFtdcRspClientPositionField;

exports.CShfeFtdcRspInstrumentField = CShfeFtdcRspInstrumentField;

exports.CShfeFtdcQryInformationField = CShfeFtdcQryInformationField;

exports.CShfeFtdcInformationField = CShfeFtdcInformationField;

exports.CShfeFtdcCreditLimitField = CShfeFtdcCreditLimitField;

exports.CShfeFtdcRspClientField = CShfeFtdcRspClientField;

exports.CShfeFtdcFlowMessageCancelField = CShfeFtdcFlowMessageCancelField;

exports.CShfeFtdcQryExchangeRateField = CShfeFtdcQryExchangeRateField;

exports.CShfeFtdcRspExchangeRateField = CShfeFtdcRspExchangeRateField;

exports.CShfeFtdcParticipantField = CShfeFtdcParticipantField;

exports.CShfeFtdcUserField = CShfeFtdcUserField;

exports.CShfeFtdcClientField = CShfeFtdcClientField;

exports.CShfeFtdcUserSessionField = CShfeFtdcUserSessionField;

exports.CShfeFtdcProductGroupField = CShfeFtdcProductGroupField;

exports.CShfeFtdcProductField = CShfeFtdcProductField;

exports.CShfeFtdcInstrumentField = CShfeFtdcInstrumentField;

exports.CShfeFtdcCombinationLegField = CShfeFtdcCombinationLegField;

exports.CShfeFtdcAccountInfoField = CShfeFtdcAccountInfoField;

exports.CShfeFtdcPartPositionField = CShfeFtdcPartPositionField;

exports.CShfeFtdcClientPositionField = CShfeFtdcClientPositionField;

exports.CShfeFtdcHedgeVolumeField = CShfeFtdcHedgeVolumeField;

exports.CShfeFtdcMarketDataField = CShfeFtdcMarketDataField;

exports.CShfeFtdcDepthMarketDataField = CShfeFtdcDepthMarketDataField;

exports.CShfeFtdcMBLMarketDataField = CShfeFtdcMBLMarketDataField;

exports.CShfeFtdcAliasDefineField = CShfeFtdcAliasDefineField;

exports.CShfeFtdcMarketDataBaseField = CShfeFtdcMarketDataBaseField;

exports.CShfeFtdcMarketDataStaticField = CShfeFtdcMarketDataStaticField;

exports.CShfeFtdcMarketDataLastMatchField = CShfeFtdcMarketDataLastMatchField;

exports.CShfeFtdcMarketDataBestPriceField = CShfeFtdcMarketDataBestPriceField;

exports.CShfeFtdcMarketDataBid23Field = CShfeFtdcMarketDataBid23Field;

exports.CShfeFtdcMarketDataAsk23Field = CShfeFtdcMarketDataAsk23Field;

exports.CShfeFtdcMarketDataBid45Field = CShfeFtdcMarketDataBid45Field;

exports.CShfeFtdcMarketDataAsk45Field = CShfeFtdcMarketDataAsk45Field;

exports.CShfeFtdcMarketDataUpdateTimeField = CShfeFtdcMarketDataUpdateTimeField;

exports.CShfeFtdcQuoteField = CShfeFtdcQuoteField;

exports.CShfeFtdcTradeField = CShfeFtdcTradeField;

exports.CShfeFtdcOrderField = CShfeFtdcOrderField;

exports.CShfeFtdcExecOrderField = CShfeFtdcExecOrderField;

exports.CShfeFtdcCombOrderField = CShfeFtdcCombOrderField;

exports.CShfeFtdcAdminOrderField = CShfeFtdcAdminOrderField;

exports.CShfeFtdcInputAdminOrderField = CShfeFtdcInputAdminOrderField;

exports.CShfeFtdcBulletinField = CShfeFtdcBulletinField;

exports.CShfeFtdcExchangeDataSyncStatusField = CShfeFtdcExchangeDataSyncStatusField;

exports.CShfeFtdcSGDataSyncStatusField = CShfeFtdcSGDataSyncStatusField;

exports.CShfeFtdcInstrumentStatusField = CShfeFtdcInstrumentStatusField;

exports.CShfeFtdcRTTMeasureField = CShfeFtdcRTTMeasureField;

exports.CShfeFtdcQryClientPositionV1Field = CShfeFtdcQryClientPositionV1Field;

exports.CShfeFtdcUserCommFluxControlField = CShfeFtdcUserCommFluxControlField;

exports.CShfeFtdcLoopMeasureField = CShfeFtdcLoopMeasureField;

exports.CShfeFtdcNodeMeasureField = CShfeFtdcNodeMeasureField;

exports.CShfeFtdcMDProxyField = CShfeFtdcMDProxyField;

exports.CShfeFtdcReqQryTopCpuInfoField = CShfeFtdcReqQryTopCpuInfoField;

exports.CShfeFtdcRspQryTopCpuInfoField = CShfeFtdcRspQryTopCpuInfoField;

exports.CShfeFtdcRtnTopCpuInfoField = CShfeFtdcRtnTopCpuInfoField;

exports.CShfeFtdcReqQryTopMemInfoField = CShfeFtdcReqQryTopMemInfoField;

exports.CShfeFtdcRspQryTopMemInfoField = CShfeFtdcRspQryTopMemInfoField;

exports.CShfeFtdcRtnTopMemInfoField = CShfeFtdcRtnTopMemInfoField;

exports.CShfeFtdcReqQryTopProcessInfoField = CShfeFtdcReqQryTopProcessInfoField;

exports.CShfeFtdcRspQryTopProcessInfoField = CShfeFtdcRspQryTopProcessInfoField;

exports.CShfeFtdcRtnTopProcessInfoField = CShfeFtdcRtnTopProcessInfoField;

exports.CShfeFtdcReqQryFileSystemInfoField = CShfeFtdcReqQryFileSystemInfoField;

exports.CShfeFtdcRspQryFileSystemInfoField = CShfeFtdcRspQryFileSystemInfoField;

exports.CShfeFtdcRtnFileSystemInfoField = CShfeFtdcRtnFileSystemInfoField;

exports.CShfeFtdcReqQryNetworkInfoField = CShfeFtdcReqQryNetworkInfoField;

exports.CShfeFtdcRspQryNetworkInfoField = CShfeFtdcRspQryNetworkInfoField;

exports.CShfeFtdcRtnNetworkInfoField = CShfeFtdcRtnNetworkInfoField;

exports.CShfeFtdcReqQryHostEnvField = CShfeFtdcReqQryHostEnvField;

exports.CShfeFtdcRspQryHostEnvCommonField = CShfeFtdcRspQryHostEnvCommonField;

exports.CShfeFtdcRspQryHostEnvLanField = CShfeFtdcRspQryHostEnvLanField;

exports.CShfeFtdcRspQryHostEnvStorageField = CShfeFtdcRspQryHostEnvStorageField;

exports.CShfeFtdcRspQryHostEnvIOField = CShfeFtdcRspQryHostEnvIOField;

exports.CShfeFtdcRspQryHostEnvFSField = CShfeFtdcRspQryHostEnvFSField;

exports.CShfeFtdcRspQryHostEnvSwapField = CShfeFtdcRspQryHostEnvSwapField;

exports.CShfeFtdcRspQryHostEnvLanCfgField = CShfeFtdcRspQryHostEnvLanCfgField;

exports.CShfeFtdcReqQryClientLoginField = CShfeFtdcReqQryClientLoginField;

exports.CShfeFtdcRspQryClientLoginField = CShfeFtdcRspQryClientLoginField;

exports.CShfeFtdcReqQryMonitorObjectField = CShfeFtdcReqQryMonitorObjectField;

exports.CShfeFtdcRspQryMonitorObjectField = CShfeFtdcRspQryMonitorObjectField;

exports.CShfeFtdcRtnMonitorObjectField = CShfeFtdcRtnMonitorObjectField;

exports.CShfeFtdcReqQryObjectRationalField = CShfeFtdcReqQryObjectRationalField;

exports.CShfeFtdcRspQryObjectRationalField = CShfeFtdcRspQryObjectRationalField;

exports.CShfeFtdcRtnObjectRationalField = CShfeFtdcRtnObjectRationalField;

exports.CShfeFtdcReqQrySyslogInfoField = CShfeFtdcReqQrySyslogInfoField;

exports.CShfeFtdcRspQrySyslogInfoField = CShfeFtdcRspQrySyslogInfoField;

exports.CShfeFtdcRtnSyslogInfoField = CShfeFtdcRtnSyslogInfoField;

exports.CShfeFtdcReqQrySubscriberField = CShfeFtdcReqQrySubscriberField;

exports.CShfeFtdcRspQrySubscriberField = CShfeFtdcRspQrySubscriberField;

exports.CShfeFtdcRtnSubscriberField = CShfeFtdcRtnSubscriberField;

exports.CShfeFtdcReqQryOidRelationField = CShfeFtdcReqQryOidRelationField;

exports.CShfeFtdcRspQryOidRelationField = CShfeFtdcRspQryOidRelationField;

exports.CShfeFtdcRtnOidRelationField = CShfeFtdcRtnOidRelationField;

exports.CShfeFtdcReqQryUserInfoField = CShfeFtdcReqQryUserInfoField;

exports.CShfeFtdcRspQryUserInfoField = CShfeFtdcRspQryUserInfoField;

exports.CShfeFtdcRtnUserInfoField = CShfeFtdcRtnUserInfoField;

exports.CShfeFtdcReqQryOnlineUserInfoField = CShfeFtdcReqQryOnlineUserInfoField;

exports.CShfeFtdcRspQryOnlineUserInfoField = CShfeFtdcRspQryOnlineUserInfoField;

exports.CShfeFtdcRtnOnlineUserInfoField = CShfeFtdcRtnOnlineUserInfoField;

exports.CShfeFtdcSysWarningEventField = CShfeFtdcSysWarningEventField;

exports.CShfeFtdcReqQryWarningEventField = CShfeFtdcReqQryWarningEventField;

exports.CShfeFtdcRspQryWarningEventField = CShfeFtdcRspQryWarningEventField;

exports.CShfeFtdcRtnWarningEventField = CShfeFtdcRtnWarningEventField;

exports.CShfeFtdcReqQryKeyFileInfoField = CShfeFtdcReqQryKeyFileInfoField;

exports.CShfeFtdcReqQryHostMonitorCfgField = CShfeFtdcReqQryHostMonitorCfgField;

exports.CShfeFtdcReqQryAppMonitorCfgField = CShfeFtdcReqQryAppMonitorCfgField;

exports.CShfeFtdcReqQryCPUUsageField = CShfeFtdcReqQryCPUUsageField;

exports.CShfeFtdcRspQryCPUUsageField = CShfeFtdcRspQryCPUUsageField;

exports.CShfeFtdcRtnCPUUsageField = CShfeFtdcRtnCPUUsageField;

exports.CShfeFtdcReqQryMemoryUsageField = CShfeFtdcReqQryMemoryUsageField;

exports.CShfeFtdcRspQryMemoryUsageField = CShfeFtdcRspQryMemoryUsageField;

exports.CShfeFtdcRtnMemoryUsageField = CShfeFtdcRtnMemoryUsageField;

exports.CShfeFtdcReqQryDiskUsageField = CShfeFtdcReqQryDiskUsageField;

exports.CShfeFtdcRspQryDiskUsageField = CShfeFtdcRspQryDiskUsageField;

exports.CShfeFtdcRtnDiskUsageField = CShfeFtdcRtnDiskUsageField;

exports.CShfeFtdcReqQryObjectAttrField = CShfeFtdcReqQryObjectAttrField;

exports.CShfeFtdcRspQryObjectAttrField = CShfeFtdcRspQryObjectAttrField;

exports.CShfeFtdcRtnObjectAttrField = CShfeFtdcRtnObjectAttrField;

exports.CShfeFtdcReqQryHostConfigField = CShfeFtdcReqQryHostConfigField;

exports.CShfeFtdcReqQryInvalidateOrderField = CShfeFtdcReqQryInvalidateOrderField;

exports.CShfeFtdcRspQryInvalidateOrderField = CShfeFtdcRspQryInvalidateOrderField;

exports.CShfeFtdcRtnInvalidateOrderField = CShfeFtdcRtnInvalidateOrderField;

exports.CShfeFtdcReqQryOrderStatusField = CShfeFtdcReqQryOrderStatusField;

exports.CShfeFtdcRspQryOrderStatusField = CShfeFtdcRspQryOrderStatusField;

exports.CShfeFtdcRtnOrderStatusField = CShfeFtdcRtnOrderStatusField;

exports.CShfeFtdcReqQryBargainOrderField = CShfeFtdcReqQryBargainOrderField;

exports.CShfeFtdcRspQryBargainOrderField = CShfeFtdcRspQryBargainOrderField;

exports.CShfeFtdcRtnBargainOrderField = CShfeFtdcRtnBargainOrderField;

exports.CShfeFtdcReqQryInstPropertyField = CShfeFtdcReqQryInstPropertyField;

exports.CShfeFtdcRspQryInstPropertyField = CShfeFtdcRspQryInstPropertyField;

exports.CShfeFtdcRtnInstPropertyField = CShfeFtdcRtnInstPropertyField;

exports.CShfeFtdcReqQryMarginRateField = CShfeFtdcReqQryMarginRateField;

exports.CShfeFtdcRspQryMarginRateField = CShfeFtdcRspQryMarginRateField;

exports.CShfeFtdcRtnMarginRateField = CShfeFtdcRtnMarginRateField;

exports.CShfeFtdcReqQryPriceLimitField = CShfeFtdcReqQryPriceLimitField;

exports.CShfeFtdcRspQryPriceLimitField = CShfeFtdcRspQryPriceLimitField;

exports.CShfeFtdcRtnPriceLimitField = CShfeFtdcRtnPriceLimitField;

exports.CShfeFtdcReqQryPartPosiLimitField = CShfeFtdcReqQryPartPosiLimitField;

exports.CShfeFtdcRspQryPartPosiLimitField = CShfeFtdcRspQryPartPosiLimitField;

exports.CShfeFtdcRtnPartPosiLimitField = CShfeFtdcRtnPartPosiLimitField;

exports.CShfeFtdcReqQryClientPosiLimitField = CShfeFtdcReqQryClientPosiLimitField;

exports.CShfeFtdcRspQryClientPosiLimitField = CShfeFtdcRspQryClientPosiLimitField;

exports.CShfeFtdcRtnClientPosiLimitField = CShfeFtdcRtnClientPosiLimitField;

exports.CShfeFtdcReqQrySpecialPosiLimitField = CShfeFtdcReqQrySpecialPosiLimitField;

exports.CShfeFtdcRspQrySpecialPosiLimitField = CShfeFtdcRspQrySpecialPosiLimitField;

exports.CShfeFtdcRtnSpecialPosiLimitField = CShfeFtdcRtnSpecialPosiLimitField;

exports.CShfeFtdcReqQryTransactionChgField = CShfeFtdcReqQryTransactionChgField;

exports.CShfeFtdcRspQryTransactionChgField = CShfeFtdcRspQryTransactionChgField;

exports.CShfeFtdcRtnTransactionChgField = CShfeFtdcRtnTransactionChgField;

exports.CShfeFtdcReqQryClientChgField = CShfeFtdcReqQryClientChgField;

exports.CShfeFtdcRspQryClientChgField = CShfeFtdcRspQryClientChgField;

exports.CShfeFtdcRtnClientChgField = CShfeFtdcRtnClientChgField;

exports.CShfeFtdcReqQryPartClientChgField = CShfeFtdcReqQryPartClientChgField;

exports.CShfeFtdcRspQryPartClientChgField = CShfeFtdcRspQryPartClientChgField;

exports.CShfeFtdcRtnPartClientChgField = CShfeFtdcRtnPartClientChgField;

exports.CShfeFtdcReqQryPosiLimitChgField = CShfeFtdcReqQryPosiLimitChgField;

exports.CShfeFtdcRspQryPosiLimitChgField = CShfeFtdcRspQryPosiLimitChgField;

exports.CShfeFtdcRtnPosiLimitChgField = CShfeFtdcRtnPosiLimitChgField;

exports.CShfeFtdcReqQryHedgeDetailChgField = CShfeFtdcReqQryHedgeDetailChgField;

exports.CShfeFtdcRspQryHedgeDetailChgField = CShfeFtdcRspQryHedgeDetailChgField;

exports.CShfeFtdcRtnHedgeDetailChgField = CShfeFtdcRtnHedgeDetailChgField;

exports.CShfeFtdcReqQryParticipantChgField = CShfeFtdcReqQryParticipantChgField;

exports.CShfeFtdcRspQryParticipantChgField = CShfeFtdcRspQryParticipantChgField;

exports.CShfeFtdcRtnParticipantChgField = CShfeFtdcRtnParticipantChgField;

exports.CShfeFtdcReqQryMarginRateChgField = CShfeFtdcReqQryMarginRateChgField;

exports.CShfeFtdcRspQryMarginRateChgField = CShfeFtdcRspQryMarginRateChgField;

exports.CShfeFtdcRtnMarginRateChgField = CShfeFtdcRtnMarginRateChgField;

exports.CShfeFtdcReqQryUserIpChgField = CShfeFtdcReqQryUserIpChgField;

exports.CShfeFtdcRspQryUserIpChgField = CShfeFtdcRspQryUserIpChgField;

exports.CShfeFtdcRtnUserIpChgField = CShfeFtdcRtnUserIpChgField;

exports.CShfeFtdcReqQryClientPosiLimitChgField = CShfeFtdcReqQryClientPosiLimitChgField;

exports.CShfeFtdcRspQryClientPosiLimitChgField = CShfeFtdcRspQryClientPosiLimitChgField;

exports.CShfeFtdcRtnClientPosiLimitChgField = CShfeFtdcRtnClientPosiLimitChgField;

exports.CShfeFtdcReqQrySpecPosiLimitChgField = CShfeFtdcReqQrySpecPosiLimitChgField;

exports.CShfeFtdcRspQrySpecPosiLimitChgField = CShfeFtdcRspQrySpecPosiLimitChgField;

exports.CShfeFtdcRtnSpecPosiLimitChgField = CShfeFtdcRtnSpecPosiLimitChgField;

exports.CShfeFtdcReqQryHistoryObjectAttrField = CShfeFtdcReqQryHistoryObjectAttrField;

exports.CShfeFtdcRspQryHistoryObjectAttrField = CShfeFtdcRspQryHistoryObjectAttrField;

exports.CShfeFtdcRtnHistoryObjectAttrField = CShfeFtdcRtnHistoryObjectAttrField;

exports.CShfeFtdcReqQryFrontInfoField = CShfeFtdcReqQryFrontInfoField;

exports.CShfeFtdcRspQryFrontInfoField = CShfeFtdcRspQryFrontInfoField;

exports.CShfeFtdcRtnFrontInfoField = CShfeFtdcRtnFrontInfoField;

exports.CShfeFtdcReqQrySysUserLoginField = CShfeFtdcReqQrySysUserLoginField;

exports.CShfeFtdcRspQrySysUserLoginField = CShfeFtdcRspQrySysUserLoginField;

exports.CShfeFtdcReqQrySysUserLogoutField = CShfeFtdcReqQrySysUserLogoutField;

exports.CShfeFtdcRspQrySysUserLogoutField = CShfeFtdcRspQrySysUserLogoutField;

exports.CShfeFtdcReqQrySysUserPasswordUpdateField = CShfeFtdcReqQrySysUserPasswordUpdateField;

exports.CShfeFtdcRspQrySysUserPasswordUpdateField = CShfeFtdcRspQrySysUserPasswordUpdateField;

exports.CShfeFtdcReqQrySysUserRegisterField = CShfeFtdcReqQrySysUserRegisterField;

exports.CShfeFtdcRspQrySysUserRegisterField = CShfeFtdcRspQrySysUserRegisterField;

exports.CShfeFtdcReqQrySysUserDeleteField = CShfeFtdcReqQrySysUserDeleteField;

exports.CShfeFtdcRspQrySysUserDeleteField = CShfeFtdcRspQrySysUserDeleteField;

exports.CShfeFtdcRspQryParticipantInitField = CShfeFtdcRspQryParticipantInitField;

exports.CShfeFtdcRtnParticipantInitField = CShfeFtdcRtnParticipantInitField;

exports.CShfeFtdcRspQryUserInitField = CShfeFtdcRspQryUserInitField;

exports.CShfeFtdcRtnUserInitField = CShfeFtdcRtnUserInitField;

exports.CShfeFtdcRspQryClientInitField = CShfeFtdcRspQryClientInitField;

exports.CShfeFtdcRtnClientInitField = CShfeFtdcRtnClientInitField;

exports.CShfeFtdcReqQryTradeLogField = CShfeFtdcReqQryTradeLogField;

exports.CShfeFtdcRspQryTradeLogField = CShfeFtdcRspQryTradeLogField;

exports.CShfeFtdcRtnTradeLogField = CShfeFtdcRtnTradeLogField;

exports.CShfeFtdcReqQryWarningEventUpdateField = CShfeFtdcReqQryWarningEventUpdateField;

exports.CShfeFtdcReqQryTradeUserLoginInfoField = CShfeFtdcReqQryTradeUserLoginInfoField;

exports.CShfeFtdcRspQryTradeUserLoginInfoField = CShfeFtdcRspQryTradeUserLoginInfoField;

exports.CShfeFtdcRtnTradeUserLoginInfoField = CShfeFtdcRtnTradeUserLoginInfoField;

exports.CShfeFtdcReqQryPartTradeField = CShfeFtdcReqQryPartTradeField;

exports.CShfeFtdcRspQryPartTradeField = CShfeFtdcRspQryPartTradeField;

exports.CShfeFtdcReqQryTradepeakField = CShfeFtdcReqQryTradepeakField;

exports.CShfeFtdcRspQryTradepeakField = CShfeFtdcRspQryTradepeakField;

exports.CShfeFtdcRtnUpdateSysConfigField = CShfeFtdcRtnUpdateSysConfigField;

exports.CShfeFtdcRtnSysUserField = CShfeFtdcRtnSysUserField;

exports.CShfeFtdcRtnPriceLimitChgField = CShfeFtdcRtnPriceLimitChgField;

exports.CShfeFtdcReqQryParticipantInitField = CShfeFtdcReqQryParticipantInitField;

exports.CShfeFtdcReqQryUserInitField = CShfeFtdcReqQryUserInitField;

exports.CShfeFtdcSysFileAccessInfoField = CShfeFtdcSysFileAccessInfoField;

exports.CShfeFtdcReqQryHistoryCpuInfoField = CShfeFtdcReqQryHistoryCpuInfoField;

exports.CShfeFtdcRspQryHistoryCpuInfoField = CShfeFtdcRspQryHistoryCpuInfoField;

exports.CShfeFtdcReqQryHistoryMemInfoField = CShfeFtdcReqQryHistoryMemInfoField;

exports.CShfeFtdcRspQryHistoryMemInfoField = CShfeFtdcRspQryHistoryMemInfoField;

exports.CShfeFtdcReqQryHistoryNetworkInfoField = CShfeFtdcReqQryHistoryNetworkInfoField;

exports.CShfeFtdcRspQryHistoryNetworkInfoField = CShfeFtdcRspQryHistoryNetworkInfoField;

exports.CShfeFtdcRspQryHostConfigField = CShfeFtdcRspQryHostConfigField;

exports.CShfeFtdcReqQryMonitorOnlineUserField = CShfeFtdcReqQryMonitorOnlineUserField;

exports.CShfeFtdcRspQryMonitorOnlineUserField = CShfeFtdcRspQryMonitorOnlineUserField;

exports.CShfeFtdcReqQryFrontStatField = CShfeFtdcReqQryFrontStatField;

exports.CShfeFtdcRspQryFrontStatField = CShfeFtdcRspQryFrontStatField;

exports.CShfeFtdcRtnSysTimeSyncField = CShfeFtdcRtnSysTimeSyncField;

exports.CShfeFtdcRtnDataCenterChgField = CShfeFtdcRtnDataCenterChgField;

exports.CShfeFtdcReqQryHistoryTradePeakField = CShfeFtdcReqQryHistoryTradePeakField;

exports.CShfeFtdcRspQryHistoryTradePeakField = CShfeFtdcRspQryHistoryTradePeakField;

exports.CShfeFtdcRtnHistoryTradePeakField = CShfeFtdcRtnHistoryTradePeakField;

exports.CShfeFtdcReqQrySyslogEventField = CShfeFtdcReqQrySyslogEventField;

exports.CShfeFtdcRspQrySyslogEventField = CShfeFtdcRspQrySyslogEventField;

exports.CShfeFtdcRtnSyslogEventField = CShfeFtdcRtnSyslogEventField;

exports.CShfeFtdcReqQrySyslogEventSubcriberField = CShfeFtdcReqQrySyslogEventSubcriberField;

exports.CShfeFtdcReqQryTradeDayChangeField = CShfeFtdcReqQryTradeDayChangeField;

exports.CShfeFtdcRspQryTradeDayChangeField = CShfeFtdcRspQryTradeDayChangeField;

exports.CShfeFtdcReqQryTomcatInfoField = CShfeFtdcReqQryTomcatInfoField;

exports.CShfeFtdcRspQryWebAppInfoField = CShfeFtdcRspQryWebAppInfoField;

exports.CShfeFtdcRtnWebAppInfoField = CShfeFtdcRtnWebAppInfoField;

exports.CShfeFtdcRspQryServletInfoField = CShfeFtdcRspQryServletInfoField;

exports.CShfeFtdcRtnServletInfoField = CShfeFtdcRtnServletInfoField;

exports.CShfeFtdcRspQryFileInfoField = CShfeFtdcRspQryFileInfoField;

exports.CShfeFtdcRtnFileInfoField = CShfeFtdcRtnFileInfoField;

exports.CShfeFtdcRspQrySessionInfoField = CShfeFtdcRspQrySessionInfoField;

exports.CShfeFtdcRtnSessionInfoField = CShfeFtdcRtnSessionInfoField;

exports.CShfeFtdcRspQryJDBCInfoField = CShfeFtdcRspQryJDBCInfoField;

exports.CShfeFtdcRtnJDBCInfoField = CShfeFtdcRtnJDBCInfoField;

exports.CShfeFtdcRspQryThreadInfoField = CShfeFtdcRspQryThreadInfoField;

exports.CShfeFtdcRtnThreadInfoField = CShfeFtdcRtnThreadInfoField;

exports.CShfeFtdcReqQryVMInfoField = CShfeFtdcReqQryVMInfoField;

exports.CShfeFtdcRspQryVMInfoField = CShfeFtdcRspQryVMInfoField;

exports.CShfeFtdcRtnVMInfoField = CShfeFtdcRtnVMInfoField;

exports.CShfeFtdcReqQryPropertyInfoField = CShfeFtdcReqQryPropertyInfoField;

exports.CShfeFtdcRspQryPropertyInfoField = CShfeFtdcRspQryPropertyInfoField;

exports.CShfeFtdcRtnPropertyInfoField = CShfeFtdcRtnPropertyInfoField;

exports.CShfeFtdcReqQryMemPoolInfoField = CShfeFtdcReqQryMemPoolInfoField;

exports.CShfeFtdcRspQryMemPoolInfoField = CShfeFtdcRspQryMemPoolInfoField;

exports.CShfeFtdcRtnMemPoolInfoField = CShfeFtdcRtnMemPoolInfoField;

exports.CShfeFtdcReqQryFileContentInfoField = CShfeFtdcReqQryFileContentInfoField;

exports.CShfeFtdcRspQryFileContentInfoField = CShfeFtdcRspQryFileContentInfoField;

exports.CShfeFtdcRtnFileContentInfoField = CShfeFtdcRtnFileContentInfoField;

exports.CShfeFtdcReqQryConnectionInfoField = CShfeFtdcReqQryConnectionInfoField;

exports.CShfeFtdcRspQryConnectionInfoField = CShfeFtdcRspQryConnectionInfoField;

exports.CShfeFtdcRtnConnectionInfoField = CShfeFtdcRtnConnectionInfoField;

exports.CShfeFtdcReqQryConnectorInfoField = CShfeFtdcReqQryConnectorInfoField;

exports.CShfeFtdcRspQryConnectorInfoField = CShfeFtdcRspQryConnectorInfoField;

exports.CShfeFtdcRtnConnectorInfoField = CShfeFtdcRtnConnectorInfoField;

exports.CShfeFtdcReqQryDBQueryField = CShfeFtdcReqQryDBQueryField;

exports.CShfeFtdcRspQryDBQueryField = CShfeFtdcRspQryDBQueryField;

exports.CShfeFtdcRtnDBQueryField = CShfeFtdcRtnDBQueryField;

exports.CShfeFtdcSysGeneralFieldField = CShfeFtdcSysGeneralFieldField;

exports.CShfeFtdcReqQryGetFileField = CShfeFtdcReqQryGetFileField;

exports.CShfeFtdcRspQryGetFileField = CShfeFtdcRspQryGetFileField;

exports.CShfeFtdcReqQrySyslogEventUpdateField = CShfeFtdcReqQrySyslogEventUpdateField;

exports.CShfeFtdcReqQryWarningQueryField = CShfeFtdcReqQryWarningQueryField;

exports.CShfeFtdcRspQryWarningQueryField = CShfeFtdcRspQryWarningQueryField;

exports.CShfeFtdcRtnWarningQueryField = CShfeFtdcRtnWarningQueryField;

exports.CShfeFtdcReqQryWebVisitField = CShfeFtdcReqQryWebVisitField;

exports.CShfeFtdcRtnHostConfigField = CShfeFtdcRtnHostConfigField;

exports.CShfeFtdcReqQryWarningActiveChangeField = CShfeFtdcReqQryWarningActiveChangeField;

exports.CShfeFtdcRspQryWarningActiveChangeField = CShfeFtdcRspQryWarningActiveChangeField;

exports.CShfeFtdcRtnWarningActiveChangeField = CShfeFtdcRtnWarningActiveChangeField;

exports.CShfeFtdcReqQryGeneralOperateField = CShfeFtdcReqQryGeneralOperateField;

exports.CShfeFtdcRspQryGeneralOperateField = CShfeFtdcRspQryGeneralOperateField;

exports.CShfeFtdcRtnGeneralOperateField = CShfeFtdcRtnGeneralOperateField;

exports.CShfeFtdcReqQryNetDeviceLinkedField = CShfeFtdcReqQryNetDeviceLinkedField;

exports.CShfeFtdcRspQryNetDeviceLinkedField = CShfeFtdcRspQryNetDeviceLinkedField;

exports.CShfeFtdcRtnNetDeviceLinkedField = CShfeFtdcRtnNetDeviceLinkedField;

exports.CShfeFtdcReqQryTradeUserLoginStatField = CShfeFtdcReqQryTradeUserLoginStatField;

exports.CShfeFtdcRspQryTradeUserLoginStatField = CShfeFtdcRspQryTradeUserLoginStatField;

exports.CShfeFtdcReqQryTradeFrontOrderRttStatField = CShfeFtdcReqQryTradeFrontOrderRttStatField;

exports.CShfeFtdcRspQryTradeFrontOrderRttStatField = CShfeFtdcRspQryTradeFrontOrderRttStatField;

exports.CShfeFtdcRtnTradeFrontOrderRttStatField = CShfeFtdcRtnTradeFrontOrderRttStatField;

exports.CShfeFtdcReqQryParticTradeOrderStatesField = CShfeFtdcReqQryParticTradeOrderStatesField;

exports.CShfeFtdcRspQryParticTradeOrderStatesField = CShfeFtdcRspQryParticTradeOrderStatesField;

exports.CShfeFtdcRtnParticTradeOrderStatesField = CShfeFtdcRtnParticTradeOrderStatesField;

exports.CShfeFtdcReqQryRouterInfoField = CShfeFtdcReqQryRouterInfoField;

exports.CShfeFtdcRspQryRouterInfoField = CShfeFtdcRspQryRouterInfoField;

exports.CShfeFtdcRtnRouterInfoField = CShfeFtdcRtnRouterInfoField;

exports.CShfeFtdcReqQryDiskIOField = CShfeFtdcReqQryDiskIOField;

exports.CShfeFtdcRspQryDiskIOField = CShfeFtdcRspQryDiskIOField;

exports.CShfeFtdcRtnDiskIOField = CShfeFtdcRtnDiskIOField;

exports.CShfeFtdcReqQryStatInfoField = CShfeFtdcReqQryStatInfoField;

exports.CShfeFtdcRspQryStatInfoField = CShfeFtdcRspQryStatInfoField;

exports.CShfeFtdcRtnStatInfoField = CShfeFtdcRtnStatInfoField;

exports.CShfeFtdcReqQryTradeOrderRttCutLineField = CShfeFtdcReqQryTradeOrderRttCutLineField;

exports.CShfeFtdcRspQryTradeOrderRttCutLineField = CShfeFtdcRspQryTradeOrderRttCutLineField;

exports.CShfeFtdcRtnTradeOrderRttCutLineField = CShfeFtdcRtnTradeOrderRttCutLineField;

exports.CShfeFtdcReqQryClientInfoField = CShfeFtdcReqQryClientInfoField;

exports.CShfeFtdcRspQryClientInfoField = CShfeFtdcRspQryClientInfoField;

exports.CShfeFtdcRtnClientInfoField = CShfeFtdcRtnClientInfoField;

exports.CShfeFtdcReqQryEventDescriptionField = CShfeFtdcReqQryEventDescriptionField;

exports.CShfeFtdcRspQryEventDescriptionField = CShfeFtdcRspQryEventDescriptionField;

exports.CShfeFtdcRtnEventDescriptionField = CShfeFtdcRtnEventDescriptionField;

exports.CShfeFtdcReqQryFrontUniqueIDField = CShfeFtdcReqQryFrontUniqueIDField;

exports.CShfeFtdcRspQryFrontUniqueIDField = CShfeFtdcRspQryFrontUniqueIDField;

exports.CShfeFtdcRtnFrontUniqueIDField = CShfeFtdcRtnFrontUniqueIDField;

exports.CShfeFtdcReqQryNetPartyLinkAddrChangeField = CShfeFtdcReqQryNetPartyLinkAddrChangeField;

exports.CShfeFtdcRspQryNetPartyLinkAddrChangeField = CShfeFtdcRspQryNetPartyLinkAddrChangeField;

exports.CShfeFtdcRtnNetPartyLinkAddrChangeField = CShfeFtdcRtnNetPartyLinkAddrChangeField;

exports.CShfeFtdcReqQryNetDelPartyLinkInfoField = CShfeFtdcReqQryNetDelPartyLinkInfoField;

exports.CShfeFtdcRspQryNetDelPartyLinkInfoField = CShfeFtdcRspQryNetDelPartyLinkInfoField;

exports.CShfeFtdcRtnNetDelPartyLinkInfoField = CShfeFtdcRtnNetDelPartyLinkInfoField;

exports.CShfeFtdcReqQryPerformanceTopField = CShfeFtdcReqQryPerformanceTopField;

exports.CShfeFtdcRspQryPerformanceTopField = CShfeFtdcRspQryPerformanceTopField;

exports.CShfeFtdcRtnPerformanceTopField = CShfeFtdcRtnPerformanceTopField;

exports.CShfeFtdcReqQryInstrumentStatusField = CShfeFtdcReqQryInstrumentStatusField;

exports.CShfeFtdcRspQryInstrumentStatusField = CShfeFtdcRspQryInstrumentStatusField;

exports.CShfeFtdcRtnInstrumentStatusField = CShfeFtdcRtnInstrumentStatusField;

exports.CShfeFtdcReqQryCurrTradingSegmentAttrField = CShfeFtdcReqQryCurrTradingSegmentAttrField;

exports.CShfeFtdcRspQryCurrTradingSegmentAttrField = CShfeFtdcRspQryCurrTradingSegmentAttrField;

exports.CShfeFtdcRtnCurrTradingSegmentAttrField = CShfeFtdcRtnCurrTradingSegmentAttrField;

exports.CShfeFtdcReqQryRealTimeNetObjectAttrField = CShfeFtdcReqQryRealTimeNetObjectAttrField;

exports.CShfeFtdcReqQryNetAreaField = CShfeFtdcReqQryNetAreaField;

exports.CShfeFtdcRspQryNetAreaField = CShfeFtdcRspQryNetAreaField;

exports.CShfeFtdcRtnNetAreaField = CShfeFtdcRtnNetAreaField;

exports.CShfeFtdcReqQryNetSubAreaField = CShfeFtdcReqQryNetSubAreaField;

exports.CShfeFtdcRspQryNetSubAreaField = CShfeFtdcRspQryNetSubAreaField;

exports.CShfeFtdcRtnNetSubAreaField = CShfeFtdcRtnNetSubAreaField;

exports.CShfeFtdcReqQryNetSubAreaIPField = CShfeFtdcReqQryNetSubAreaIPField;

exports.CShfeFtdcRspQryNetSubAreaIPField = CShfeFtdcRspQryNetSubAreaIPField;

exports.CShfeFtdcRtnNetSubAreaIPField = CShfeFtdcRtnNetSubAreaIPField;

exports.CShfeFtdcReqQryNetDeviceDetectField = CShfeFtdcReqQryNetDeviceDetectField;

exports.CShfeFtdcReqQryNetDeviceRequestField = CShfeFtdcReqQryNetDeviceRequestField;

exports.CShfeFtdcRspQryNetDeviceField = CShfeFtdcRspQryNetDeviceField;

exports.CShfeFtdcRtnNetDeviceField = CShfeFtdcRtnNetDeviceField;

exports.CShfeFtdcRspQryNetDeviceDetectField = CShfeFtdcRspQryNetDeviceDetectField;

exports.CShfeFtdcReqQryNetBuildingField = CShfeFtdcReqQryNetBuildingField;

exports.CShfeFtdcRspQryNetBuildingField = CShfeFtdcRspQryNetBuildingField;

exports.CShfeFtdcRtnNetBuildingField = CShfeFtdcRtnNetBuildingField;

exports.CShfeFtdcReqQryNetRoomField = CShfeFtdcReqQryNetRoomField;

exports.CShfeFtdcRspQryNetRoomField = CShfeFtdcRspQryNetRoomField;

exports.CShfeFtdcRtnNetRoomField = CShfeFtdcRtnNetRoomField;

exports.CShfeFtdcReqQryNetCabinetsField = CShfeFtdcReqQryNetCabinetsField;

exports.CShfeFtdcRspQryNetCabinetsField = CShfeFtdcRspQryNetCabinetsField;

exports.CShfeFtdcRtnNetCabinetsField = CShfeFtdcRtnNetCabinetsField;

exports.CShfeFtdcReqQryNetOIDField = CShfeFtdcReqQryNetOIDField;

exports.CShfeFtdcRspQryNetOIDField = CShfeFtdcRspQryNetOIDField;

exports.CShfeFtdcRtnNetOIDField = CShfeFtdcRtnNetOIDField;

exports.CShfeFtdcReqQryNetTimePolicyField = CShfeFtdcReqQryNetTimePolicyField;

exports.CShfeFtdcRspQryNetTimePolicyField = CShfeFtdcRspQryNetTimePolicyField;

exports.CShfeFtdcRtnNetTimePolicyField = CShfeFtdcRtnNetTimePolicyField;

exports.CShfeFtdcReqQryNetGatherTaskField = CShfeFtdcReqQryNetGatherTaskField;

exports.CShfeFtdcRspQryNetGatherTaskField = CShfeFtdcRspQryNetGatherTaskField;

exports.CShfeFtdcRtnNetGatherTaskField = CShfeFtdcRtnNetGatherTaskField;

exports.CShfeFtdcReqQryNetDeviceChgField = CShfeFtdcReqQryNetDeviceChgField;

exports.CShfeFtdcRspQryNetDeviceChgField = CShfeFtdcRspQryNetDeviceChgField;

exports.CShfeFtdcRtnNetDeviceChgField = CShfeFtdcRtnNetDeviceChgField;

exports.CShfeFtdcReqQryNetDeviceTypeField = CShfeFtdcReqQryNetDeviceTypeField;

exports.CShfeFtdcRspQryNetDeviceTypeField = CShfeFtdcRspQryNetDeviceTypeField;

exports.CShfeFtdcRtnNetDeviceTypeField = CShfeFtdcRtnNetDeviceTypeField;

exports.CShfeFtdcReqQryNetDeviceCategoryField = CShfeFtdcReqQryNetDeviceCategoryField;

exports.CShfeFtdcRspQryNetDeviceCategoryField = CShfeFtdcRspQryNetDeviceCategoryField;

exports.CShfeFtdcRtnNetDeviceCategoryField = CShfeFtdcRtnNetDeviceCategoryField;

exports.CShfeFtdcReqQryNetManufactoryField = CShfeFtdcReqQryNetManufactoryField;

exports.CShfeFtdcRspQryNetManufactoryField = CShfeFtdcRspQryNetManufactoryField;

exports.CShfeFtdcRtnNetManufactoryField = CShfeFtdcRtnNetManufactoryField;

exports.CShfeFtdcReqQryNetCommunityField = CShfeFtdcReqQryNetCommunityField;

exports.CShfeFtdcRspQryNetCommunityField = CShfeFtdcRspQryNetCommunityField;

exports.CShfeFtdcRtnNetCommunityField = CShfeFtdcRtnNetCommunityField;

exports.CShfeFtdcReqQryNetPortTypeField = CShfeFtdcReqQryNetPortTypeField;

exports.CShfeFtdcRspQryNetPortTypeField = CShfeFtdcRspQryNetPortTypeField;

exports.CShfeFtdcRtnNetPortTypeField = CShfeFtdcRtnNetPortTypeField;

exports.CShfeFtdcReqQryNetPartAccessSpotField = CShfeFtdcReqQryNetPartAccessSpotField;

exports.CShfeFtdcRspQryNetPartAccessSpotField = CShfeFtdcRspQryNetPartAccessSpotField;

exports.CShfeFtdcRtnNetPartAccessSpotField = CShfeFtdcRtnNetPartAccessSpotField;

exports.CShfeFtdcReqQryNetInterfaceField = CShfeFtdcReqQryNetInterfaceField;

exports.CShfeFtdcRspQryNetInterfaceField = CShfeFtdcRspQryNetInterfaceField;

exports.CShfeFtdcRtnNetInterfaceField = CShfeFtdcRtnNetInterfaceField;

exports.CShfeFtdcReqQryNetGeneralOIDField = CShfeFtdcReqQryNetGeneralOIDField;

exports.CShfeFtdcRspQryNetGeneralOIDField = CShfeFtdcRspQryNetGeneralOIDField;

exports.CShfeFtdcRtnNetGeneralOIDField = CShfeFtdcRtnNetGeneralOIDField;

exports.CShfeFtdcReqQryNetMonitorTypeField = CShfeFtdcReqQryNetMonitorTypeField;

exports.CShfeFtdcRspQryNetMonitorTypeField = CShfeFtdcRspQryNetMonitorTypeField;

exports.CShfeFtdcRtnNetMonitorTypeField = CShfeFtdcRtnNetMonitorTypeField;

exports.CShfeFtdcReqQryNetMonitorAttrScopeField = CShfeFtdcReqQryNetMonitorAttrScopeField;

exports.CShfeFtdcRspQryNetMonitorAttrScopeField = CShfeFtdcRspQryNetMonitorAttrScopeField;

exports.CShfeFtdcRtnNetMonitorAttrScopeField = CShfeFtdcRtnNetMonitorAttrScopeField;

exports.CShfeFtdcReqQryNetMonitorAttrTypeField = CShfeFtdcReqQryNetMonitorAttrTypeField;

exports.CShfeFtdcRspQryNetMonitorAttrTypeField = CShfeFtdcRspQryNetMonitorAttrTypeField;

exports.CShfeFtdcRtnNetMonitorAttrTypeField = CShfeFtdcRtnNetMonitorAttrTypeField;

exports.CShfeFtdcReqQryNetMonitorObjectAttrField = CShfeFtdcReqQryNetMonitorObjectAttrField;

exports.CShfeFtdcRspQryNetMonitorObjectAttrField = CShfeFtdcRspQryNetMonitorObjectAttrField;

exports.CShfeFtdcRtnNetMonitorObjectAttrField = CShfeFtdcRtnNetMonitorObjectAttrField;

exports.CShfeFtdcReqQryNetFuncAreaField = CShfeFtdcReqQryNetFuncAreaField;

exports.CShfeFtdcRspQryNetFuncAreaField = CShfeFtdcRspQryNetFuncAreaField;

exports.CShfeFtdcRtnNetFuncAreaField = CShfeFtdcRtnNetFuncAreaField;

exports.CShfeFtdcReqQryNetMonitorCommandTypeField = CShfeFtdcReqQryNetMonitorCommandTypeField;

exports.CShfeFtdcRspQryNetMonitorCommandTypeField = CShfeFtdcRspQryNetMonitorCommandTypeField;

exports.CShfeFtdcRtnNetMonitorCommandTypeField = CShfeFtdcRtnNetMonitorCommandTypeField;

exports.CShfeFtdcReqQryNetMonitorActionGroupField = CShfeFtdcReqQryNetMonitorActionGroupField;

exports.CShfeFtdcRspQryNetMonitorActionGroupField = CShfeFtdcRspQryNetMonitorActionGroupField;

exports.CShfeFtdcRtnNetMonitorActionGroupField = CShfeFtdcRtnNetMonitorActionGroupField;

exports.CShfeFtdcReqQryNetMonitorDeviceGroupField = CShfeFtdcReqQryNetMonitorDeviceGroupField;

exports.CShfeFtdcRspQryNetMonitorDeviceGroupField = CShfeFtdcRspQryNetMonitorDeviceGroupField;

exports.CShfeFtdcRtnNetMonitorDeviceGroupField = CShfeFtdcRtnNetMonitorDeviceGroupField;

exports.CShfeFtdcReqQryNetMonitorTaskInfoField = CShfeFtdcReqQryNetMonitorTaskInfoField;

exports.CShfeFtdcRspQryNetMonitorTaskInfoField = CShfeFtdcRspQryNetMonitorTaskInfoField;

exports.CShfeFtdcRtnNetMonitorTaskInfoField = CShfeFtdcRtnNetMonitorTaskInfoField;

exports.CShfeFtdcReqQryNetMonitorTaskResultField = CShfeFtdcReqQryNetMonitorTaskResultField;

exports.CShfeFtdcRspQryNetMonitorTaskResultField = CShfeFtdcRspQryNetMonitorTaskResultField;

exports.CShfeFtdcRtnNetMonitorTaskResultField = CShfeFtdcRtnNetMonitorTaskResultField;

exports.CShfeFtdcReqQryNetMonitorTaskObjectSetField = CShfeFtdcReqQryNetMonitorTaskObjectSetField;

exports.CShfeFtdcRspQryNetMonitorTaskObjectSetField = CShfeFtdcRspQryNetMonitorTaskObjectSetField;

exports.CShfeFtdcRtnNetMonitorTaskObjectSetField = CShfeFtdcRtnNetMonitorTaskObjectSetField;

exports.CShfeFtdcReqQryNetPartyLinkInfoField = CShfeFtdcReqQryNetPartyLinkInfoField;

exports.CShfeFtdcRspQryNetPartyLinkInfoField = CShfeFtdcRspQryNetPartyLinkInfoField;

exports.CShfeFtdcRtnNetPartyLinkInfoField = CShfeFtdcRtnNetPartyLinkInfoField;

exports.CShfeFtdcReqQryNetMonitorActionAttrField = CShfeFtdcReqQryNetMonitorActionAttrField;

exports.CShfeFtdcRspQryNetMonitorActionAttrField = CShfeFtdcRspQryNetMonitorActionAttrField;

exports.CShfeFtdcRtnNetMonitorActionAttrField = CShfeFtdcRtnNetMonitorActionAttrField;

exports.CShfeFtdcReqQryNetModuleField = CShfeFtdcReqQryNetModuleField;

exports.CShfeFtdcRspQryNetModuleField = CShfeFtdcRspQryNetModuleField;

exports.CShfeFtdcRtnNetModuleField = CShfeFtdcRtnNetModuleField;

exports.CShfeFtdcReqQryNetEventExprField = CShfeFtdcReqQryNetEventExprField;

exports.CShfeFtdcRspQryNetEventExprField = CShfeFtdcRspQryNetEventExprField;

exports.CShfeFtdcRtnNetEventExprField = CShfeFtdcRtnNetEventExprField;

exports.CShfeFtdcReqQryNetEventTypeField = CShfeFtdcReqQryNetEventTypeField;

exports.CShfeFtdcRspQryNetEventTypeField = CShfeFtdcRspQryNetEventTypeField;

exports.CShfeFtdcRtnNetEventTypeField = CShfeFtdcRtnNetEventTypeField;

exports.CShfeFtdcReqQryNetSubEventTypeField = CShfeFtdcReqQryNetSubEventTypeField;

exports.CShfeFtdcRspQryNetSubEventTypeField = CShfeFtdcRspQryNetSubEventTypeField;

exports.CShfeFtdcRtnNetSubEventTypeField = CShfeFtdcRtnNetSubEventTypeField;

exports.CShfeFtdcReqQryNetEventLevelField = CShfeFtdcReqQryNetEventLevelField;

exports.CShfeFtdcRspQryNetEventLevelField = CShfeFtdcRspQryNetEventLevelField;

exports.CShfeFtdcRtnNetEventLevelField = CShfeFtdcRtnNetEventLevelField;

exports.CShfeFtdcReqQryNetMonitorTaskStatusResultField = CShfeFtdcReqQryNetMonitorTaskStatusResultField;

exports.CShfeFtdcRspQryNetMonitorTaskStatusResultField = CShfeFtdcRspQryNetMonitorTaskStatusResultField;

exports.CShfeFtdcRtnNetMonitorTaskStatusResultField = CShfeFtdcRtnNetMonitorTaskStatusResultField;

exports.CShfeFtdcReqConfigLoginField = CShfeFtdcReqConfigLoginField;

exports.CShfeFtdcRspQryConfigLoginField = CShfeFtdcRspQryConfigLoginField;

exports.CShfeFtdcRspServerTypeField = CShfeFtdcRspServerTypeField;

exports.CShfeFtdcReqSysServerExitField = CShfeFtdcReqSysServerExitField;

exports.CShfeFtdcReqQryNetCfgFileField = CShfeFtdcReqQryNetCfgFileField;

exports.CShfeFtdcRspQryNetCfgFileField = CShfeFtdcRspQryNetCfgFileField;

exports.CShfeFtdcRtnNetCfgFileField = CShfeFtdcRtnNetCfgFileField;

exports.CShfeFtdcReqQryNetMonitorDeviceTaskField = CShfeFtdcReqQryNetMonitorDeviceTaskField;

exports.CShfeFtdcRspQryNetMonitorDeviceTaskField = CShfeFtdcRspQryNetMonitorDeviceTaskField;

exports.CShfeFtdcRtnNetMonitorDeviceTaskField = CShfeFtdcRtnNetMonitorDeviceTaskField;

exports.CShfeFtdcReqQryNetMonitorTaskInstAttrsField = CShfeFtdcReqQryNetMonitorTaskInstAttrsField;

exports.CShfeFtdcRspQryNetMonitorTaskInstAttrsField = CShfeFtdcRspQryNetMonitorTaskInstAttrsField;

exports.CShfeFtdcRtnNetMonitorTaskInstAttrsField = CShfeFtdcRtnNetMonitorTaskInstAttrsField;

exports.CShfeFtdcReqQryFileGeneralOperField = CShfeFtdcReqQryFileGeneralOperField;

exports.CShfeFtdcRspQryFileGeneralOperField = CShfeFtdcRspQryFileGeneralOperField;

exports.CShfeFtdcRtnFileGeneralOperField = CShfeFtdcRtnFileGeneralOperField;

exports.CShfeFtdcReqQryNetBaseLineField = CShfeFtdcReqQryNetBaseLineField;

exports.CShfeFtdcRspQryNetBaseLineField = CShfeFtdcRspQryNetBaseLineField;

exports.CShfeFtdcRtnNetBaseLineField = CShfeFtdcRtnNetBaseLineField;

exports.CShfeFtdcReqQryNetBaseLineTaskField = CShfeFtdcReqQryNetBaseLineTaskField;

exports.CShfeFtdcRspQryNetBaseLineTaskField = CShfeFtdcRspQryNetBaseLineTaskField;

exports.CShfeFtdcRtnNetBaseLineTaskField = CShfeFtdcRtnNetBaseLineTaskField;

exports.CShfeFtdcReqQryNetBaseLineResultField = CShfeFtdcReqQryNetBaseLineResultField;

exports.CShfeFtdcRspQryNetBaseLineResultField = CShfeFtdcRspQryNetBaseLineResultField;

exports.CShfeFtdcRtnNetBaseLineResultField = CShfeFtdcRtnNetBaseLineResultField;

exports.CShfeFtdcReqQryNetPartyLinkStatusInfoField = CShfeFtdcReqQryNetPartyLinkStatusInfoField;

exports.CShfeFtdcRspQryNetPartyLinkStatusInfoField = CShfeFtdcRspQryNetPartyLinkStatusInfoField;

exports.CShfeFtdcRtnNetPartyLinkStatusInfoField = CShfeFtdcRtnNetPartyLinkStatusInfoField;

exports.CShfeFtdcReqQryNetMemberSDHLineInfoField = CShfeFtdcReqQryNetMemberSDHLineInfoField;

exports.CShfeFtdcRspQryNetMemberSDHLineInfoField = CShfeFtdcRspQryNetMemberSDHLineInfoField;

exports.CShfeFtdcRtnNetMemberSDHLineInfoField = CShfeFtdcRtnNetMemberSDHLineInfoField;

exports.CShfeFtdcReqQryNetDDNLinkInfoField = CShfeFtdcReqQryNetDDNLinkInfoField;

exports.CShfeFtdcRspQryNetDDNLinkInfoField = CShfeFtdcRspQryNetDDNLinkInfoField;

exports.CShfeFtdcRtnNetDDNLinkInfoField = CShfeFtdcRtnNetDDNLinkInfoField;

exports.CShfeFtdcReqQryNetPseudMemberLinkInfoField = CShfeFtdcReqQryNetPseudMemberLinkInfoField;

exports.CShfeFtdcRspQryNetPseudMemberLinkInfoField = CShfeFtdcRspQryNetPseudMemberLinkInfoField;

exports.CShfeFtdcRtnNetPseudMemberLinkInfoField = CShfeFtdcRtnNetPseudMemberLinkInfoField;

exports.CShfeFtdcReqQryOuterDeviceInfField = CShfeFtdcReqQryOuterDeviceInfField;

exports.CShfeFtdcRspQryOuterDeviceInfField = CShfeFtdcRspQryOuterDeviceInfField;

exports.CShfeFtdcRtnNetOuterDeviceInfField = CShfeFtdcRtnNetOuterDeviceInfField;

exports.CShfeFtdcReqQryNetLocalPingResultInfoField = CShfeFtdcReqQryNetLocalPingResultInfoField;

exports.CShfeFtdcRspQryNetLocalPingResultInfoField = CShfeFtdcRspQryNetLocalPingResultInfoField;

exports.CShfeFtdcRtnNetLocalPingResultInfoField = CShfeFtdcRtnNetLocalPingResultInfoField;

exports.CShfeFtdcReqQryNetRomotePingResultInfoField = CShfeFtdcReqQryNetRomotePingResultInfoField;

exports.CShfeFtdcRspQryNetRomotePingResultInfoField = CShfeFtdcRspQryNetRomotePingResultInfoField;

exports.CShfeFtdcRtnNetRomotePingResultInfoField = CShfeFtdcRtnNetRomotePingResultInfoField;

exports.CShfeFtdcRtnMonitorTopProcessInfoField = CShfeFtdcRtnMonitorTopProcessInfoField;

exports.CShfeFtdcReqQrySysInternalTopologyField = CShfeFtdcReqQrySysInternalTopologyField;

exports.CShfeFtdcRspQrySysInternalTopologyField = CShfeFtdcRspQrySysInternalTopologyField;

exports.CShfeFtdcRtnSysInternalTopologyField = CShfeFtdcRtnSysInternalTopologyField;

exports.CShfeFtdcReqQryMemberLinkCostField = CShfeFtdcReqQryMemberLinkCostField;

exports.CShfeFtdcRspQryMemberLinkCostField = CShfeFtdcRspQryMemberLinkCostField;

exports.CShfeFtdcRtnMemberLinkCostField = CShfeFtdcRtnMemberLinkCostField;

exports.CShfeFtdcReqQryNetPartylinkMonthlyRentField = CShfeFtdcReqQryNetPartylinkMonthlyRentField;

exports.CShfeFtdcRspQryNetPartylinkMonthlyRentField = CShfeFtdcRspQryNetPartylinkMonthlyRentField;

exports.CShfeFtdcRtnNetPartylinkMonthlyRentField = CShfeFtdcRtnNetPartylinkMonthlyRentField;

exports.CShfeFtdcReqQryNetNonPartyLinkInfoField = CShfeFtdcReqQryNetNonPartyLinkInfoField;

exports.CShfeFtdcRspQryNetNonPartyLinkInfoField = CShfeFtdcRspQryNetNonPartyLinkInfoField;

exports.CShfeFtdcRtnNetNonPartyLinkInfoField = CShfeFtdcRtnNetNonPartyLinkInfoField;

exports.CShfeFtdcSysNetAreaField = CShfeFtdcSysNetAreaField;

exports.CShfeFtdcSysNetSubAreaField = CShfeFtdcSysNetSubAreaField;

exports.CShfeFtdcSysNetSubAreaIPField = CShfeFtdcSysNetSubAreaIPField;

exports.CShfeFtdcSysNetDeviceTypeField = CShfeFtdcSysNetDeviceTypeField;

exports.CShfeFtdcSysNetOIDField = CShfeFtdcSysNetOIDField;

exports.CShfeFtdcSysNetTimePolicyField = CShfeFtdcSysNetTimePolicyField;

exports.CShfeFtdcSysNetGatherTaskField = CShfeFtdcSysNetGatherTaskField;

exports.CShfeFtdcSysNetDeviceCategoryField = CShfeFtdcSysNetDeviceCategoryField;

exports.CShfeFtdcSysNetManufactoryField = CShfeFtdcSysNetManufactoryField;

exports.CShfeFtdcSysNetCommunityField = CShfeFtdcSysNetCommunityField;

exports.CShfeFtdcSysNetGeneralOIDField = CShfeFtdcSysNetGeneralOIDField;

exports.CShfeFtdcSysNetDeviceLinkedField = CShfeFtdcSysNetDeviceLinkedField;

exports.CShfeFtdcSysNetDeviceField = CShfeFtdcSysNetDeviceField;

exports.CShfeFtdcSysNetInterfaceField = CShfeFtdcSysNetInterfaceField;

exports.CShfeFtdcSysNetMonitorTypeField = CShfeFtdcSysNetMonitorTypeField;

exports.CShfeFtdcSysNetMonitorAttrScopeField = CShfeFtdcSysNetMonitorAttrScopeField;

exports.CShfeFtdcSysNetMonitorAttrTypeField = CShfeFtdcSysNetMonitorAttrTypeField;

exports.CShfeFtdcSysNetMonitorObjectAttrField = CShfeFtdcSysNetMonitorObjectAttrField;

exports.CShfeFtdcSysNetFuncAreaField = CShfeFtdcSysNetFuncAreaField;

exports.CShfeFtdcSysNetMonitorCommandTypeField = CShfeFtdcSysNetMonitorCommandTypeField;

exports.CShfeFtdcSysNetMonitorActionGroupField = CShfeFtdcSysNetMonitorActionGroupField;

exports.CShfeFtdcSysNetMonitorDeviceGroupField = CShfeFtdcSysNetMonitorDeviceGroupField;

exports.CShfeFtdcSysNetMonitorTaskInfoField = CShfeFtdcSysNetMonitorTaskInfoField;

exports.CShfeFtdcSysNetDeviceChgField = CShfeFtdcSysNetDeviceChgField;

exports.CShfeFtdcSysNetMonitorTaskResultField = CShfeFtdcSysNetMonitorTaskResultField;

exports.CShfeFtdcSysNetMonitorTaskObjectSetField = CShfeFtdcSysNetMonitorTaskObjectSetField;

exports.CShfeFtdcSysNetPartyLinkInfoField = CShfeFtdcSysNetPartyLinkInfoField;

exports.CShfeFtdcSysNetMonitorActionAttrField = CShfeFtdcSysNetMonitorActionAttrField;

exports.CShfeFtdcSysNetModuleField = CShfeFtdcSysNetModuleField;

exports.CShfeFtdcSysNetEventExprField = CShfeFtdcSysNetEventExprField;

exports.CShfeFtdcSysNetEventTypeField = CShfeFtdcSysNetEventTypeField;

exports.CShfeFtdcSysNetSubEventTypeField = CShfeFtdcSysNetSubEventTypeField;

exports.CShfeFtdcSysNetEventLevelField = CShfeFtdcSysNetEventLevelField;

exports.CShfeFtdcSysNetMonitorDeviceTaskField = CShfeFtdcSysNetMonitorDeviceTaskField;

exports.CShfeFtdcSysNetMonitorTaskInstAttrsField = CShfeFtdcSysNetMonitorTaskInstAttrsField;

exports.CShfeFtdcSysNetBaseLineField = CShfeFtdcSysNetBaseLineField;

exports.CShfeFtdcSysNetBaseLineTaskField = CShfeFtdcSysNetBaseLineTaskField;

exports.CShfeFtdcSysNetBaseLineResultField = CShfeFtdcSysNetBaseLineResultField;

exports.CShfeFtdcSysNetPartyLinkStatusInfoField = CShfeFtdcSysNetPartyLinkStatusInfoField;

exports.CShfeFtdcSysNetMemberSDHLineInfoField = CShfeFtdcSysNetMemberSDHLineInfoField;

exports.CShfeFtdcSysNetDDNLinkInfoField = CShfeFtdcSysNetDDNLinkInfoField;

exports.CShfeFtdcSysNetPseudMemberLinkInfoField = CShfeFtdcSysNetPseudMemberLinkInfoField;

exports.CShfeFtdcSysNetMonitorDeviceTask2Field = CShfeFtdcSysNetMonitorDeviceTask2Field;

exports.CShfeFtdcSysNetOuterDeviceInfoField = CShfeFtdcSysNetOuterDeviceInfoField;

exports.CShfeFtdcSysLocalPingResultInfoField = CShfeFtdcSysLocalPingResultInfoField;

exports.CShfeFtdcSysRomotePingResultInfoField = CShfeFtdcSysRomotePingResultInfoField;

exports.CShfeFtdcSysNetDelPartyLinkInfoField = CShfeFtdcSysNetDelPartyLinkInfoField;

exports.CShfeFtdcSysNetPartyLinkAddrChangeField = CShfeFtdcSysNetPartyLinkAddrChangeField;

exports.CShfeFtdcSysInternalTopologyField = CShfeFtdcSysInternalTopologyField;

exports.CShfeFtdcSysMemberLinkCostField = CShfeFtdcSysMemberLinkCostField;

exports.CShfeFtdcSysNetPartylinkMonthlyRentField = CShfeFtdcSysNetPartylinkMonthlyRentField;

exports.CShfeFtdcSysNetNonPartyLinkInfoField = CShfeFtdcSysNetNonPartyLinkInfoField;

