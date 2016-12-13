exports.CShfeFtdcDisseminationField = function ()
{
    this.SequenceSeries = 0; 
    this.SequenceNo = 0; 
};

exports.CShfeFtdcRspInfoField = function ()
{
    this.ErrorID = 0; 
    this.ErrorMsg = ""; 
};

exports.CShfeFtdcCommPhaseField = function ()
{
    this.TradingDay = ""; 
    this.CommPhaseNo = 0; 
};

exports.CShfeFtdcExchangeTradingDayField = function ()
{
    this.TradingDay = ""; 
    this.ExchangeID = ""; 
};

exports.CShfeFtdcSettlementSessionField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
};

exports.CShfeFtdcCurrentTimeField = function ()
{
    this.CurrDate = ""; 
    this.CurrTime = ""; 
    this.CurrMillisec = 0; 
};

exports.CShfeFtdcReqUserLoginField = function ()
{
    this.TradingDay = ""; 
    this.UserID = ""; 
    this.ParticipantID = ""; 
    this.Password = ""; 
    this.UserProductInfo = ""; 
    this.InterfaceProductInfo = ""; 
    this.ProtocolInfo = ""; 
    this.DataCenterID = 0; 
};

exports.CShfeFtdcRspUserLoginField = function ()
{
    this.TradingDay = ""; 
    this.LoginTime = ""; 
    this.MaxOrderLocalID = ""; 
    this.UserID = ""; 
    this.ParticipantID = ""; 
    this.TradingSystemName = ""; 
    this.DataCenterID = 0; 
    this.PrivateFlowSize = 0; 
    this.UserFlowSize = 0; 
    this.ActionDay = ""; 
};

exports.CShfeFtdcReqUserLogoutField = function ()
{
    this.UserID = ""; 
    this.ParticipantID = ""; 
};

exports.CShfeFtdcRspUserLogoutField = function ()
{
    this.UserID = ""; 
    this.ParticipantID = ""; 
};

exports.CShfeFtdcInputOrderField = function ()
{
    this.OrderSysID = ""; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
    this.InstrumentID = ""; 
    this.OrderPriceType = 0; 
    this.Direction = 0; 
    this.CombOffsetFlag = ""; 
    this.CombHedgeFlag = ""; 
    this.LimitPrice = 0; 
    this.VolumeTotalOriginal = 0; 
    this.TimeCondition = 0; 
    this.GTDDate = ""; 
    this.VolumeCondition = 0; 
    this.MinVolume = 0; 
    this.ContingentCondition = 0; 
    this.StopPrice = 0; 
    this.ForceCloseReason = 0; 
    this.OrderLocalID = ""; 
    this.IsAutoSuspend = 0; 
    this.BusinessUnit = ""; 
    this.BusinessLocalID = 0; 
};

exports.CShfeFtdcOrderActionField = function ()
{
    this.OrderSysID = ""; 
    this.OrderLocalID = ""; 
    this.ActionFlag = 0; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
    this.LimitPrice = 0; 
    this.VolumeChange = 0; 
    this.ActionLocalID = ""; 
    this.BusinessUnit = ""; 
    this.BusinessLocalID = 0; 
};

exports.CShfeFtdcOTCOrderField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.OTCOrderSysID = ""; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
    this.InstrumentID = ""; 
    this.Direction = 0; 
    this.OffsetFlag = 0; 
    this.HedgeFlag = 0; 
    this.Price = 0; 
    this.Volume = 0; 
    this.OtherParticipantID = ""; 
    this.OtherClientID = ""; 
    this.OtherUserID = ""; 
    this.OtherOffsetFlag = 0; 
    this.OtherHedgeFlag = 0; 
    this.OTCOrderLocalID = ""; 
    this.OTCOrderStatus = 0; 
    this.InsertTime = ""; 
    this.CancelTime = ""; 
    this.ClearingPartID = ""; 
    this.OtherClearingPartID = ""; 
    this.BusinessLocalID = 0; 
    this.ActionDay = ""; 
    this.EfpInstrumentID = ""; 
};

exports.CShfeFtdcOrderSessionField = function ()
{
    this.FrontID = 0; 
    this.SessionID = 0; 
    this.RequestID = 0; 
};

exports.CShfeFtdcInputQuoteField = function ()
{
    this.QuoteSysID = ""; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
    this.Volume = 0; 
    this.InstrumentID = ""; 
    this.QuoteLocalID = ""; 
    this.BusinessUnit = ""; 
    this.BidCombOffsetFlag = ""; 
    this.BidCombHedgeFlag = ""; 
    this.BidPrice = 0; 
    this.AskCombOffsetFlag = ""; 
    this.AskCombHedgeFlag = ""; 
    this.AskPrice = 0; 
    this.BusinessLocalID = 0; 
};

exports.CShfeFtdcQuoteActionField = function ()
{
    this.QuoteSysID = ""; 
    this.QuoteLocalID = ""; 
    this.ActionFlag = 0; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
    this.ActionLocalID = ""; 
    this.BusinessUnit = ""; 
    this.BusinessLocalID = 0; 
};

exports.CShfeFtdcInputExecOrderField = function ()
{
    this.InstrumentID = ""; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
    this.ExecOrderLocalID = ""; 
    this.Volume = 0; 
    this.BusinessUnit = ""; 
    this.OffsetFlag = 0; 
    this.BusinessLocalID = 0; 
};

exports.CShfeFtdcExecOrderActionField = function ()
{
    this.ExecOrderSysID = ""; 
    this.ExecOrderLocalID = ""; 
    this.ActionFlag = 0; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
    this.ActionLocalID = ""; 
    this.BusinessUnit = ""; 
    this.BusinessLocalID = 0; 
};

exports.CShfeFtdcUserLogoutField = function ()
{
    this.UserID = ""; 
    this.ParticipantID = ""; 
};

exports.CShfeFtdcUserPasswordUpdateField = function ()
{
    this.UserID = ""; 
    this.ParticipantID = ""; 
    this.OldPassword = ""; 
    this.NewPassword = ""; 
};

exports.CShfeFtdcInputCombOrderField = function ()
{
    this.CombOrderSysID = ""; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
    this.LimitPrice = 0; 
    this.VolumeTotalOriginal = 0; 
    this.CombOrderLocalID = ""; 
    this.BusinessUnit = ""; 
    this.InstrumentID1 = ""; 
    this.Direction1 = 0; 
    this.LegMultiple1 = 0; 
    this.OffsetFlag1 = 0; 
    this.HedgeFlag1 = 0; 
    this.InstrumentID2 = ""; 
    this.Direction2 = 0; 
    this.LegMultiple2 = 0; 
    this.OffsetFlag2 = 0; 
    this.HedgeFlag2 = 0; 
    this.InstrumentID3 = ""; 
    this.Direction3 = 0; 
    this.LegMultiple3 = 0; 
    this.OffsetFlag3 = 0; 
    this.HedgeFlag3 = 0; 
    this.InstrumentID4 = ""; 
    this.Direction4 = 0; 
    this.LegMultiple4 = 0; 
    this.OffsetFlag4 = 0; 
    this.HedgeFlag4 = 0; 
    this.BusinessLocalID = 0; 
};

exports.CShfeFtdcForceUserExitField = function ()
{
    this.ParticipantID = ""; 
    this.UserID = ""; 
};

exports.CShfeFtdcAccountDepositField = function ()
{
    this.SettlementGroupID = ""; 
    this.Account = ""; 
    this.Deposit = 0; 
};

exports.CShfeFtdcQryOrderField = function ()
{
    this.PartIDStart = ""; 
    this.PartIDEnd = ""; 
    this.OrderSysID = ""; 
    this.InstrumentID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
    this.TimeStart = ""; 
    this.TimeEnd = ""; 
};

exports.CShfeFtdcQryQuoteField = function ()
{
    this.PartIDStart = ""; 
    this.PartIDEnd = ""; 
    this.QuoteSysID = ""; 
    this.ClientID = ""; 
    this.InstrumentID = ""; 
    this.UserID = ""; 
};

exports.CShfeFtdcQryTradeField = function ()
{
    this.PartIDStart = ""; 
    this.PartIDEnd = ""; 
    this.InstIDStart = ""; 
    this.InstIDEnd = ""; 
    this.TradeID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
    this.TimeStart = ""; 
    this.TimeEnd = ""; 
};

exports.CShfeFtdcQryMarketDataField = function ()
{
    this.ProductID = ""; 
    this.InstrumentID = ""; 
};

exports.CShfeFtdcQryClientField = function ()
{
    this.PartIDStart = ""; 
    this.PartIDEnd = ""; 
    this.ClientIDStart = ""; 
    this.ClientIDEnd = ""; 
};

exports.CShfeFtdcQryPartPositionField = function ()
{
    this.PartIDStart = ""; 
    this.PartIDEnd = ""; 
    this.InstIDStart = ""; 
    this.InstIDEnd = ""; 
};

exports.CShfeFtdcQryClientPositionField = function ()
{
    this.PartIDStart = ""; 
    this.PartIDEnd = ""; 
    this.ClientIDStart = ""; 
    this.ClientIDEnd = ""; 
    this.InstIDStart = ""; 
    this.InstIDEnd = ""; 
    this.ClientType = 0; 
};

exports.CShfeFtdcQryPartAccountField = function ()
{
    this.PartIDStart = ""; 
    this.PartIDEnd = ""; 
    this.AccountID = ""; 
};

exports.CShfeFtdcQryInstrumentField = function ()
{
    this.SettlementGroupID = ""; 
    this.ProductGroupID = ""; 
    this.ProductID = ""; 
    this.InstrumentID = ""; 
};

exports.CShfeFtdcQryInstrumentStatusField = function ()
{
    this.InstIDStart = ""; 
    this.InstIDEnd = ""; 
};

exports.CShfeFtdcQrySGDataSyncStatusField = function ()
{
    this.SettlementGroupID = ""; 
};

exports.CShfeFtdcQryUserSessionField = function ()
{
    this.UserIDStart = ""; 
    this.UserIDEnd = ""; 
};

exports.CShfeFtdcQryUserField = function ()
{
    this.UserIDStart = ""; 
    this.UserIDEnd = ""; 
};

exports.CShfeFtdcQryBulletinField = function ()
{
    this.TradingDay = ""; 
    this.MarketID = ""; 
    this.BulletinID = 0; 
    this.NewsType = ""; 
    this.NewsUrgency = 0; 
};

exports.CShfeFtdcQryParticipantField = function ()
{
    this.PartIDStart = ""; 
    this.PartIDEnd = ""; 
};

exports.CShfeFtdcQryHedgeVolumeField = function ()
{
    this.PartIDStart = ""; 
    this.PartIDEnd = ""; 
    this.ClientIDStart = ""; 
    this.ClientIDEnd = ""; 
    this.InstIDStart = ""; 
    this.InstIDEnd = ""; 
};

exports.CShfeFtdcQryMBLMarketDataField = function ()
{
    this.InstIDStart = ""; 
    this.InstIDEnd = ""; 
    this.Direction = 0; 
};

exports.CShfeFtdcQryCreditLimitField = function ()
{
    this.ParticipantID = ""; 
    this.ClearingPartID = ""; 
};

exports.CShfeFtdcQryExecOrderField = function ()
{
    this.PartIDStart = ""; 
    this.PartIDEnd = ""; 
    this.ExecOrderSysID = ""; 
    this.InstrumentID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
    this.TimeStart = ""; 
    this.TimeEnd = ""; 
};

exports.CShfeFtdcQryCombOrderField = function ()
{
    this.PartIDStart = ""; 
    this.PartIDEnd = ""; 
    this.CombOrderSysID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
};

exports.CShfeFtdcRspPartAccountField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.PreBalance = 0; 
    this.CurrMargin = 0; 
    this.CloseProfit = 0; 
    this.Premium = 0; 
    this.Deposit = 0; 
    this.Withdraw = 0; 
    this.Balance = 0; 
    this.Available = 0; 
    this.AccountID = ""; 
    this.FrozenMargin = 0; 
    this.FrozenPremium = 0; 
    this.BaseReserve = 0; 
};

exports.CShfeFtdcRspPartPositionField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.HedgeFlag = 0; 
    this.PosiDirection = 0; 
    this.YdPosition = 0; 
    this.Position = 0; 
    this.LongFrozen = 0; 
    this.ShortFrozen = 0; 
    this.YdLongFrozen = 0; 
    this.YdShortFrozen = 0; 
    this.InstrumentID = ""; 
    this.ParticipantID = ""; 
    this.TradingRole = 0; 
};

exports.CShfeFtdcRspClientPositionField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.HedgeFlag = 0; 
    this.PosiDirection = 0; 
    this.YdPosition = 0; 
    this.Position = 0; 
    this.LongFrozen = 0; 
    this.ShortFrozen = 0; 
    this.YdLongFrozen = 0; 
    this.YdShortFrozen = 0; 
    this.BuyTradeVolume = 0; 
    this.SellTradeVolume = 0; 
    this.PositionCost = 0; 
    this.YdPositionCost = 0; 
    this.UseMargin = 0; 
    this.FrozenMargin = 0; 
    this.LongFrozenMargin = 0; 
    this.ShortFrozenMargin = 0; 
    this.FrozenPremium = 0; 
    this.InstrumentID = ""; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
};

exports.CShfeFtdcRspInstrumentField = function ()
{
    this.SettlementGroupID = ""; 
    this.ProductID = ""; 
    this.ProductGroupID = ""; 
    this.UnderlyingInstrID = ""; 
    this.ProductClass = 0; 
    this.PositionType = 0; 
    this.StrikePrice = 0; 
    this.OptionsType = 0; 
    this.VolumeMultiple = 0; 
    this.UnderlyingMultiple = 0; 
    this.InstrumentID = ""; 
    this.InstrumentName = ""; 
    this.DeliveryYear = 0; 
    this.DeliveryMonth = 0; 
    this.AdvanceMonth = ""; 
    this.IsTrading = 0; 
    this.CreateDate = ""; 
    this.OpenDate = ""; 
    this.ExpireDate = ""; 
    this.StartDelivDate = ""; 
    this.EndDelivDate = ""; 
    this.BasisPrice = 0; 
    this.MaxMarketOrderVolume = 0; 
    this.MinMarketOrderVolume = 0; 
    this.MaxLimitOrderVolume = 0; 
    this.MinLimitOrderVolume = 0; 
    this.PriceTick = 0; 
    this.AllowDelivPersonOpen = 0; 
    this.CurrencyID = ""; 
};

exports.CShfeFtdcQryInformationField = function ()
{
    this.InformationIDStart = 0; 
    this.InformationIDEnd = 0; 
};

exports.CShfeFtdcInformationField = function ()
{
    this.InformationID = 0; 
    this.SequenceNo = 0; 
    this.Content = ""; 
    this.ContentLength = 0; 
    this.IsAccomplished = 0; 
};

exports.CShfeFtdcCreditLimitField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.PreBalance = 0; 
    this.CurrMargin = 0; 
    this.CloseProfit = 0; 
    this.Premium = 0; 
    this.Deposit = 0; 
    this.Withdraw = 0; 
    this.Balance = 0; 
    this.Available = 0; 
    this.ParticipantID = ""; 
    this.ClearingPartID = ""; 
    this.FrozenMargin = 0; 
    this.FrozenPremium = 0; 
};

exports.CShfeFtdcRspClientField = function ()
{
    this.ClientID = ""; 
    this.ClientName = ""; 
    this.IdentifiedCardType = ""; 
    this.UseLess = ""; 
    this.TradingRole = 0; 
    this.ClientType = 0; 
    this.IsActive = 0; 
    this.ParticipantID = ""; 
    this.IdentifiedCardNo = ""; 
};

exports.CShfeFtdcFlowMessageCancelField = function ()
{
    this.SequenceSeries = 0; 
    this.TradingDay = ""; 
    this.DataCenterID = 0; 
    this.StartSequenceNo = 0; 
    this.EndSequenceNo = 0; 
};

exports.CShfeFtdcQryExchangeRateField = function ()
{
    this.CurrencyID = ""; 
};

exports.CShfeFtdcRspExchangeRateField = function ()
{
    this.TradingDay = ""; 
    this.CurrencyID = ""; 
    this.RateUnit = 0; 
    this.RatePrice = 0; 
};

exports.CShfeFtdcParticipantField = function ()
{
    this.ParticipantID = ""; 
    this.ParticipantName = ""; 
    this.ParticipantAbbr = ""; 
    this.MemberType = 0; 
    this.IsActive = 0; 
};

exports.CShfeFtdcUserField = function ()
{
    this.ParticipantID = ""; 
    this.UserID = ""; 
    this.UserType = 0; 
    this.Password = ""; 
    this.IsActive = 0; 
};

exports.CShfeFtdcClientField = function ()
{
    this.ClientID = ""; 
    this.ClientName = ""; 
    this.IdentifiedCardType = ""; 
    this.IdentifiedCardNo = ""; 
    this.TradingRole = 0; 
    this.ClientType = 0; 
    this.IsActive = 0; 
};

exports.CShfeFtdcUserSessionField = function ()
{
    this.FrontID = 0; 
    this.UserID = ""; 
    this.UserType = 0; 
    this.SessionID = 0; 
    this.LoginTime = ""; 
    this.ParticipantID = ""; 
    this.IPAddress = ""; 
    this.UserProductInfo = ""; 
    this.InterfaceProductInfo = ""; 
    this.ProtocolInfo = ""; 
    this.SessionType = 0; 
};

exports.CShfeFtdcProductGroupField = function ()
{
    this.SettlementGroupID = ""; 
    this.ProductGroupID = ""; 
    this.ProductGroupName = ""; 
    this.CommodityID = ""; 
};

exports.CShfeFtdcProductField = function ()
{
    this.SettlementGroupID = ""; 
    this.ProductID = ""; 
    this.ProductGroupID = ""; 
    this.ProductName = ""; 
    this.ProductClass = 0; 
};

exports.CShfeFtdcInstrumentField = function ()
{
    this.SettlementGroupID = ""; 
    this.ProductID = ""; 
    this.ProductGroupID = ""; 
    this.UnderlyingInstrID = ""; 
    this.ProductClass = 0; 
    this.PositionType = 0; 
    this.StrikePrice = 0; 
    this.OptionsType = 0; 
    this.VolumeMultiple = 0; 
    this.UnderlyingMultiple = 0; 
    this.InstrumentID = ""; 
    this.InstrumentName = ""; 
    this.DeliveryYear = 0; 
    this.DeliveryMonth = 0; 
    this.AdvanceMonth = ""; 
    this.IsTrading = 0; 
    this.CurrencyID = ""; 
};

exports.CShfeFtdcCombinationLegField = function ()
{
    this.SettlementGroupID = ""; 
    this.CombInstrumentID = ""; 
    this.LegID = 0; 
    this.LegInstrumentID = ""; 
    this.Direction = 0; 
    this.LegMultiple = 0; 
    this.ImplyLevel = 0; 
};

exports.CShfeFtdcAccountInfoField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.PreBalance = 0; 
    this.CurrMargin = 0; 
    this.CloseProfit = 0; 
    this.Premium = 0; 
    this.Deposit = 0; 
    this.Withdraw = 0; 
    this.Balance = 0; 
    this.Available = 0; 
    this.DateAccountOpen = ""; 
    this.PreDate = ""; 
    this.PreSettlementID = 0; 
    this.PreMargin = 0; 
    this.FuturesMargin = 0; 
    this.OptionsMargin = 0; 
    this.PositionProfit = 0; 
    this.Profit = 0; 
    this.Interest = 0; 
    this.Fee = 0; 
    this.TotalCollateral = 0; 
    this.CollateralForMargin = 0; 
    this.PreAccmulateInterest = 0; 
    this.AccumulateInterest = 0; 
    this.AccumulateFee = 0; 
    this.ForzenDeposit = 0; 
    this.AccountStatus = 0; 
    this.AccountID = ""; 
};

exports.CShfeFtdcPartPositionField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.HedgeFlag = 0; 
    this.PosiDirection = 0; 
    this.YdPosition = 0; 
    this.Position = 0; 
    this.LongFrozen = 0; 
    this.ShortFrozen = 0; 
    this.YdLongFrozen = 0; 
    this.YdShortFrozen = 0; 
    this.InstrumentID = ""; 
    this.ParticipantID = ""; 
    this.TradingRole = 0; 
};

exports.CShfeFtdcClientPositionField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.HedgeFlag = 0; 
    this.PosiDirection = 0; 
    this.YdPosition = 0; 
    this.Position = 0; 
    this.LongFrozen = 0; 
    this.ShortFrozen = 0; 
    this.YdLongFrozen = 0; 
    this.YdShortFrozen = 0; 
    this.BuyTradeVolume = 0; 
    this.SellTradeVolume = 0; 
    this.PositionCost = 0; 
    this.YdPositionCost = 0; 
    this.UseMargin = 0; 
    this.FrozenMargin = 0; 
    this.LongFrozenMargin = 0; 
    this.ShortFrozenMargin = 0; 
    this.FrozenPremium = 0; 
    this.InstrumentID = ""; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
};

exports.CShfeFtdcHedgeVolumeField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.InstrumentID = ""; 
    this.LongVolumeOriginal = 0; 
    this.ShortVolumeOriginal = 0; 
    this.LongVolume = 0; 
    this.ShortVolume = 0; 
};

exports.CShfeFtdcMarketDataField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.LastPrice = 0; 
    this.PreSettlementPrice = 0; 
    this.PreClosePrice = 0; 
    this.PreOpenInterest = 0; 
    this.OpenPrice = 0; 
    this.HighestPrice = 0; 
    this.LowestPrice = 0; 
    this.Volume = 0; 
    this.Turnover = 0; 
    this.OpenInterest = 0; 
    this.ClosePrice = 0; 
    this.SettlementPrice = 0; 
    this.UpperLimitPrice = 0; 
    this.LowerLimitPrice = 0; 
    this.PreDelta = 0; 
    this.CurrDelta = 0; 
    this.UpdateTime = ""; 
    this.UpdateMillisec = 0; 
    this.InstrumentID = ""; 
    this.ActionDay = ""; 
};

exports.CShfeFtdcDepthMarketDataField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.LastPrice = 0; 
    this.PreSettlementPrice = 0; 
    this.PreClosePrice = 0; 
    this.PreOpenInterest = 0; 
    this.OpenPrice = 0; 
    this.HighestPrice = 0; 
    this.LowestPrice = 0; 
    this.Volume = 0; 
    this.Turnover = 0; 
    this.OpenInterest = 0; 
    this.ClosePrice = 0; 
    this.SettlementPrice = 0; 
    this.UpperLimitPrice = 0; 
    this.LowerLimitPrice = 0; 
    this.PreDelta = 0; 
    this.CurrDelta = 0; 
    this.UpdateTime = ""; 
    this.UpdateMillisec = 0; 
    this.InstrumentID = ""; 
    this.BidPrice1 = 0; 
    this.BidVolume1 = 0; 
    this.AskPrice1 = 0; 
    this.AskVolume1 = 0; 
    this.BidPrice2 = 0; 
    this.BidVolume2 = 0; 
    this.AskPrice2 = 0; 
    this.AskVolume2 = 0; 
    this.BidPrice3 = 0; 
    this.BidVolume3 = 0; 
    this.AskPrice3 = 0; 
    this.AskVolume3 = 0; 
    this.BidPrice4 = 0; 
    this.BidVolume4 = 0; 
    this.AskPrice4 = 0; 
    this.AskVolume4 = 0; 
    this.BidPrice5 = 0; 
    this.BidVolume5 = 0; 
    this.AskPrice5 = 0; 
    this.AskVolume5 = 0; 
    this.ActionDay = ""; 
};

exports.CShfeFtdcMBLMarketDataField = function ()
{
    this.InstrumentID = ""; 
    this.Direction = 0; 
    this.Price = 0; 
    this.Volume = 0; 
};

exports.CShfeFtdcAliasDefineField = function ()
{
    this.StartPos = 0; 
    this.Alias = ""; 
    this.OriginalText = ""; 
};

exports.CShfeFtdcMarketDataBaseField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.PreSettlementPrice = 0; 
    this.PreClosePrice = 0; 
    this.PreOpenInterest = 0; 
    this.PreDelta = 0; 
};

exports.CShfeFtdcMarketDataStaticField = function ()
{
    this.OpenPrice = 0; 
    this.HighestPrice = 0; 
    this.LowestPrice = 0; 
    this.ClosePrice = 0; 
    this.UpperLimitPrice = 0; 
    this.LowerLimitPrice = 0; 
    this.SettlementPrice = 0; 
    this.CurrDelta = 0; 
};

exports.CShfeFtdcMarketDataLastMatchField = function ()
{
    this.LastPrice = 0; 
    this.Volume = 0; 
    this.Turnover = 0; 
    this.OpenInterest = 0; 
};

exports.CShfeFtdcMarketDataBestPriceField = function ()
{
    this.BidPrice1 = 0; 
    this.BidVolume1 = 0; 
    this.AskPrice1 = 0; 
    this.AskVolume1 = 0; 
};

exports.CShfeFtdcMarketDataBid23Field = function ()
{
    this.BidPrice2 = 0; 
    this.BidVolume2 = 0; 
    this.BidPrice3 = 0; 
    this.BidVolume3 = 0; 
};

exports.CShfeFtdcMarketDataAsk23Field = function ()
{
    this.AskPrice2 = 0; 
    this.AskVolume2 = 0; 
    this.AskPrice3 = 0; 
    this.AskVolume3 = 0; 
};

exports.CShfeFtdcMarketDataBid45Field = function ()
{
    this.BidPrice4 = 0; 
    this.BidVolume4 = 0; 
    this.BidPrice5 = 0; 
    this.BidVolume5 = 0; 
};

exports.CShfeFtdcMarketDataAsk45Field = function ()
{
    this.AskPrice4 = 0; 
    this.AskVolume4 = 0; 
    this.AskPrice5 = 0; 
    this.AskVolume5 = 0; 
};

exports.CShfeFtdcMarketDataUpdateTimeField = function ()
{
    this.InstrumentID = ""; 
    this.UpdateTime = ""; 
    this.UpdateMillisec = 0; 
    this.ActionDay = ""; 
};

exports.CShfeFtdcQuoteField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.QuoteSysID = ""; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
    this.Volume = 0; 
    this.InstrumentID = ""; 
    this.QuoteLocalID = ""; 
    this.BusinessUnit = ""; 
    this.BidCombOffsetFlag = ""; 
    this.BidCombHedgeFlag = ""; 
    this.BidPrice = 0; 
    this.AskCombOffsetFlag = ""; 
    this.AskCombHedgeFlag = ""; 
    this.AskPrice = 0; 
    this.InsertTime = ""; 
    this.CancelTime = ""; 
    this.TradeTime = ""; 
    this.BidOrderSysID = ""; 
    this.AskOrderSysID = ""; 
    this.ClearingPartID = ""; 
    this.BusinessLocalID = 0; 
    this.ActionDay = ""; 
};

exports.CShfeFtdcTradeField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.TradeID = ""; 
    this.Direction = 0; 
    this.OrderSysID = ""; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.TradingRole = 0; 
    this.AccountID = ""; 
    this.InstrumentID = ""; 
    this.OffsetFlag = 0; 
    this.HedgeFlag = 0; 
    this.Price = 0; 
    this.Volume = 0; 
    this.TradeTime = ""; 
    this.TradeType = 0; 
    this.PriceSource = 0; 
    this.UserID = ""; 
    this.OrderLocalID = ""; 
    this.ClearingPartID = ""; 
    this.BusinessUnit = ""; 
    this.BusinessLocalID = 0; 
    this.ActionDay = ""; 
};

exports.CShfeFtdcOrderField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.OrderSysID = ""; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
    this.InstrumentID = ""; 
    this.OrderPriceType = 0; 
    this.Direction = 0; 
    this.CombOffsetFlag = ""; 
    this.CombHedgeFlag = ""; 
    this.LimitPrice = 0; 
    this.VolumeTotalOriginal = 0; 
    this.TimeCondition = 0; 
    this.GTDDate = ""; 
    this.VolumeCondition = 0; 
    this.MinVolume = 0; 
    this.ContingentCondition = 0; 
    this.StopPrice = 0; 
    this.ForceCloseReason = 0; 
    this.OrderLocalID = ""; 
    this.IsAutoSuspend = 0; 
    this.OrderSource = 0; 
    this.OrderStatus = 0; 
    this.OrderType = 0; 
    this.VolumeTraded = 0; 
    this.VolumeTotal = 0; 
    this.InsertDate = ""; 
    this.InsertTime = ""; 
    this.ActiveTime = ""; 
    this.SuspendTime = ""; 
    this.UpdateTime = ""; 
    this.CancelTime = ""; 
    this.ActiveUserID = ""; 
    this.Priority = 0; 
    this.TimeSortID = 0; 
    this.ClearingPartID = ""; 
    this.BusinessUnit = ""; 
    this.BusinessLocalID = 0; 
    this.ActionDay = ""; 
};

exports.CShfeFtdcExecOrderField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.InstrumentID = ""; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
    this.ExecOrderLocalID = ""; 
    this.Volume = 0; 
    this.BusinessUnit = ""; 
    this.OffsetFlag = 0; 
    this.ExecOrderSysID = ""; 
    this.InsertDate = ""; 
    this.InsertTime = ""; 
    this.CancelTime = ""; 
    this.ExecResult = 0; 
    this.ClearingPartID = ""; 
    this.BusinessLocalID = 0; 
    this.ActionDay = ""; 
};

exports.CShfeFtdcCombOrderField = function ()
{
    this.TradingDay = ""; 
    this.SettlementGroupID = ""; 
    this.SettlementID = 0; 
    this.CombOrderSysID = ""; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.UserID = ""; 
    this.LimitPrice = 0; 
    this.VolumeTotalOriginal = 0; 
    this.CombOrderLocalID = ""; 
    this.BusinessUnit = ""; 
    this.InstrumentID1 = ""; 
    this.Direction1 = 0; 
    this.LegMultiple1 = 0; 
    this.OffsetFlag1 = 0; 
    this.HedgeFlag1 = 0; 
    this.InstrumentID2 = ""; 
    this.Direction2 = 0; 
    this.LegMultiple2 = 0; 
    this.OffsetFlag2 = 0; 
    this.HedgeFlag2 = 0; 
    this.InstrumentID3 = ""; 
    this.Direction3 = 0; 
    this.LegMultiple3 = 0; 
    this.OffsetFlag3 = 0; 
    this.HedgeFlag3 = 0; 
    this.InstrumentID4 = ""; 
    this.Direction4 = 0; 
    this.LegMultiple4 = 0; 
    this.OffsetFlag4 = 0; 
    this.HedgeFlag4 = 0; 
    this.OrderSource = 0; 
    this.VolumeTraded = 0; 
    this.VolumeTotal = 0; 
    this.InsertDate = ""; 
    this.InsertTime = ""; 
    this.ClearingPartID = ""; 
    this.BusinessLocalID = 0; 
    this.ActionDay = ""; 
};

exports.CShfeFtdcAdminOrderField = function ()
{
    this.InstrumentID = ""; 
    this.AdminOrderCommand = 0; 
    this.ClearingPartID = ""; 
    this.ParticipantID = ""; 
    this.Amount = 0; 
    this.SettlementGroupID = ""; 
};

exports.CShfeFtdcInputAdminOrderField = function ()
{
    this.InstrumentID = ""; 
    this.AdminOrderCommand = 0; 
    this.ClearingPartID = ""; 
    this.ParticipantID = ""; 
    this.Amount = 0; 
    this.SettlementGroupID = ""; 
};

exports.CShfeFtdcBulletinField = function ()
{
    this.TradingDay = ""; 
    this.BulletinID = 0; 
    this.SequenceNo = 0; 
    this.NewsType = ""; 
    this.NewsUrgency = 0; 
    this.SendTime = ""; 
    this.Abstract = ""; 
    this.ComeFrom = ""; 
    this.Content = ""; 
    this.URLLink = ""; 
    this.MarketID = ""; 
};

exports.CShfeFtdcExchangeDataSyncStatusField = function ()
{
    this.TradingDay = ""; 
    this.ExchangeID = ""; 
    this.ExchangeDataSyncStatus = 0; 
};

exports.CShfeFtdcSGDataSyncStatusField = function ()
{
    this.SettlementGroupID = ""; 
    this.TradingDay = ""; 
    this.SettlementID = 0; 
    this.SGDataSyncStatus = 0; 
};

exports.CShfeFtdcInstrumentStatusField = function ()
{
    this.SettlementGroupID = ""; 
    this.InstrumentID = ""; 
    this.InstrumentStatus = 0; 
    this.TradingSegmentSN = 0; 
    this.EnterTime = ""; 
    this.EnterReason = 0; 
    this.EnterDate = ""; 
};

exports.CShfeFtdcRTTMeasureField = function ()
{
    this.RTT = 0; 
};

exports.CShfeFtdcQryClientPositionV1Field = function ()
{
    this.PartIDStart = ""; 
    this.PartIDEnd = ""; 
    this.ClientIDStart = ""; 
    this.ClientIDEnd = ""; 
    this.InstIDStart = ""; 
    this.InstIDEnd = ""; 
};

exports.CShfeFtdcUserCommFluxControlField = function ()
{
    this.MaxTradeCommFlux = 0; 
    this.MaxTradeOnWayCommFlux = 0; 
    this.MaxQueryCommFlux = 0; 
    this.MaxQueryOnWayCommFlux = 0; 
};

exports.CShfeFtdcLoopMeasureField = function ()
{
    this.UserID = ""; 
    this.SessionType = 0; 
    this.MeasureSeq = 0; 
    this.FrontID = 0; 
    this.SessionID = 0; 
};

exports.CShfeFtdcNodeMeasureField = function ()
{
    this.NodeID = ""; 
    this.PeriodID = 0; 
    this.Sec = 0; 
    this.Usec = 0; 
};

exports.CShfeFtdcMDProxyField = function ()
{
    this.ProxyID = 0; 
    this.UpperProxySessionID = 0; 
    this.CurrProxySessionID = 0; 
    this.IPAddress = ""; 
    this.RequestID = 0; 
    this.Depth = 0; 
    this.SessionStatus = 0; 
    this.DeletedSessionID = 0; 
};

exports.CShfeFtdcReqQryTopCpuInfoField = function ()
{
    this.HostName = ""; 
    this.CPU = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryTopCpuInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.CPU = ""; 
    this.LOAD = 0; 
    this.USER = 0; 
    this.NICE = 0; 
    this.SYS = 0; 
    this.IDLE = 0; 
    this.BLOCK = 0; 
    this.SWAIT = 0; 
    this.INTR = 0; 
    this.SSYS = 0; 
};

exports.CShfeFtdcRtnTopCpuInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.CPU = ""; 
    this.LOAD = 0; 
    this.USER = 0; 
    this.NICE = 0; 
    this.SYS = 0; 
    this.IDLE = 0; 
    this.BLOCK = 0; 
    this.SWAIT = 0; 
    this.INTR = 0; 
    this.SSYS = 0; 
};

exports.CShfeFtdcReqQryTopMemInfoField = function ()
{
    this.HostName = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryTopMemInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.TOTALREAL = 0; 
    this.ACTIVEREAL = 0; 
    this.TOTALVIRTUAL = 0; 
    this.ACTIVEVIRTUAL = 0; 
    this.FREE = 0; 
};

exports.CShfeFtdcRtnTopMemInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.TOTALREAL = 0; 
    this.ACTIVEREAL = 0; 
    this.TOTALVIRTUAL = 0; 
    this.ACTIVEVIRTUAL = 0; 
    this.FREE = 0; 
};

exports.CShfeFtdcReqQryTopProcessInfoField = function ()
{
    this.HostName = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryTopProcessInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.CPU = ""; 
    this.TTY = ""; 
    this.PID = 0; 
    this.USERNAME = ""; 
    this.PRI = 0; 
    this.NI = 0; 
    this.SIZE = 0; 
    this.RES = 0; 
    this.STATE = ""; 
    this.TIME = ""; 
    this.pWCPU = 0; 
    this.pCPU = 0; 
    this.COMMAND = ""; 
};

exports.CShfeFtdcRtnTopProcessInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.CPU = ""; 
    this.TTY = ""; 
    this.PID = 0; 
    this.USERNAME = ""; 
    this.PRI = 0; 
    this.NI = 0; 
    this.SIZE = 0; 
    this.RES = 0; 
    this.STATE = ""; 
    this.TIME = ""; 
    this.pWCPU = 0; 
    this.pCPU = 0; 
    this.COMMAND = ""; 
};

exports.CShfeFtdcReqQryFileSystemInfoField = function ()
{
    this.HostName = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryFileSystemInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.FILESYSTEM = ""; 
    this.SIZE = 0; 
    this.USED = 0; 
    this.AVAIL = 0; 
    this.pUSERD = 0; 
    this.ISIZE = 0; 
    this.IUSED = 0; 
    this.IFREE = 0; 
    this.pIUSED = 0; 
    this.MountedOn = ""; 
};

exports.CShfeFtdcRtnFileSystemInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.FILESYSTEM = ""; 
    this.SIZE = 0; 
    this.USED = 0; 
    this.AVAIL = 0; 
    this.pUSERD = 0; 
    this.ISIZE = 0; 
    this.IUSED = 0; 
    this.IFREE = 0; 
    this.pIUSED = 0; 
    this.MountedOn = ""; 
};

exports.CShfeFtdcReqQryNetworkInfoField = function ()
{
    this.HostName = ""; 
    this.LANNAME = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryNetworkInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.LANNAME = ""; 
    this.LANSTATUS = ""; 
    this.IPADDRESS = ""; 
    this.RECVBYTES = 0; 
    this.RECVPACKETS = 0; 
    this.RECVERRORPACKETS = 0; 
    this.RECVDROPPACKETS = 0; 
    this.SENDBYTES = 0; 
    this.SENDPACKETS = 0; 
    this.SENDERRORPACKETS = 0; 
    this.SENDDROPPACKETS = 0; 
};

exports.CShfeFtdcRtnNetworkInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.LANNAME = ""; 
    this.LANSTATUS = ""; 
    this.IPADDRESS = ""; 
    this.RECVBYTES = 0; 
    this.RECVPACKETS = 0; 
    this.RECVERRORPACKETS = 0; 
    this.RECVDROPPACKETS = 0; 
    this.SENDBYTES = 0; 
    this.SENDPACKETS = 0; 
    this.SENDERRORPACKETS = 0; 
    this.SENDDROPPACKETS = 0; 
};

exports.CShfeFtdcReqQryHostEnvField = function ()
{
    this.HostName = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryHostEnvCommonField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.HostModel = ""; 
    this.MainMemory = 0; 
    this.CPUVendor = ""; 
    this.CPUModel = ""; 
    this.CPUMHz = ""; 
    this.CPUCache = ""; 
    this.CPUCores = 0; 
    this.Processors = 0; 
    this.OsMode = 0; 
};

exports.CShfeFtdcRspQryHostEnvLanField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.LanHardwareID = ""; 
    this.LanHardwareValue = ""; 
};

exports.CShfeFtdcRspQryHostEnvStorageField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.StorageDev = ""; 
    this.HWPath = ""; 
    this.Interface = ""; 
};

exports.CShfeFtdcRspQryHostEnvIOField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.IoClass = ""; 
    this.H_WPath = ""; 
    this.IoDriver = ""; 
    this.IoDescription = ""; 
};

exports.CShfeFtdcRspQryHostEnvFSField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.LVMDeviceFile = ""; 
    this.MountPoint = ""; 
    this.FSsize = 0; 
    this.FSType = ""; 
};

exports.CShfeFtdcRspQryHostEnvSwapField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.type = ""; 
    this.size = 0; 
    this.priority = 0; 
    this.location = ""; 
};

exports.CShfeFtdcRspQryHostEnvLanCfgField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.LanName = ""; 
    this.IpAddress = ""; 
    this.IpMask = ""; 
};

exports.CShfeFtdcReqQryClientLoginField = function ()
{
    this.UserName = ""; 
    this.PassWord = ""; 
};

exports.CShfeFtdcRspQryClientLoginField = function ()
{
    this.UserName = ""; 
    this.Privalage = ""; 
};

exports.CShfeFtdcReqQryMonitorObjectField = function ()
{
    this.ObjectID = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryMonitorObjectField = function ()
{
    this.ObjectID = ""; 
    this.ObjectName = ""; 
    this.WarningActive = 0; 
};

exports.CShfeFtdcRtnMonitorObjectField = function ()
{
    this.ObjectID = ""; 
    this.ObjectName = ""; 
    this.WarningActive = 0; 
};

exports.CShfeFtdcReqQryObjectRationalField = function ()
{
    this.ObjectID = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryObjectRationalField = function ()
{
    this.ObjectID = ""; 
    this.HostObjectID = ""; 
};

exports.CShfeFtdcRtnObjectRationalField = function ()
{
    this.ObjectID = ""; 
    this.HostObjectID = ""; 
};

exports.CShfeFtdcReqQrySyslogInfoField = function ()
{
    this.FileName = ""; 
    this.subFileName = ""; 
};

exports.CShfeFtdcRspQrySyslogInfoField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.ContLen = 0; 
    this.FileContent = ""; 
};

exports.CShfeFtdcRtnSyslogInfoField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.ContLen = 0; 
    this.FileContent = ""; 
};

exports.CShfeFtdcReqQrySubscriberField = function ()
{
    this.ObjectID = ""; 
    this.ObjectNum = 0; 
    this.KeepAlive = 0; 
    this.MonDate = ""; 
    this.MonTime = ""; 
};

exports.CShfeFtdcRspQrySubscriberField = function ()
{
    this.ErrorID = 0; 
    this.ErrorMsg = ""; 
    this.ObjectID = ""; 
};

exports.CShfeFtdcRtnSubscriberField = function ()
{
    this.ErrorID = 0; 
    this.ErrorMsg = ""; 
    this.ObjectID = ""; 
};

exports.CShfeFtdcReqQryOidRelationField = function ()
{
    this.ObjectID = ""; 
};

exports.CShfeFtdcRspQryOidRelationField = function ()
{
    this.ObjectID = ""; 
    this.HoldObjectID = ""; 
};

exports.CShfeFtdcRtnOidRelationField = function ()
{
    this.ObjectID = ""; 
    this.HoldObjectID = ""; 
};

exports.CShfeFtdcReqQryUserInfoField = function ()
{
    this.ObjectID = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryUserInfoField = function ()
{
    this.USERNAME = ""; 
    this.USERID = 0; 
    this.GROUPNAME = ""; 
    this.GROUPID = 0; 
    this.HOMEPATH = ""; 
    this.SHELL = ""; 
    this.ObjectID = ""; 
    this.MonTime = ""; 
    this.MonDate = ""; 
};

exports.CShfeFtdcRtnUserInfoField = function ()
{
    this.USERNAME = ""; 
    this.USERID = 0; 
    this.GROUPNAME = ""; 
    this.GROUPID = 0; 
    this.HOMEPATH = ""; 
    this.SHELL = ""; 
    this.ObjectID = ""; 
    this.MonTime = ""; 
    this.MonDate = ""; 
};

exports.CShfeFtdcReqQryOnlineUserInfoField = function ()
{
    this.ObjectID = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryOnlineUserInfoField = function ()
{
    this.USERNAME = ""; 
    this.TIME = ""; 
    this.TTY = ""; 
    this.IP = ""; 
    this.CONNECTIME = ""; 
    this.PID = 0; 
    this.ObjectID = ""; 
    this.MonTime = ""; 
    this.MonDate = ""; 
};

exports.CShfeFtdcRtnOnlineUserInfoField = function ()
{
    this.USERNAME = ""; 
    this.TIME = ""; 
    this.TTY = ""; 
    this.IP = ""; 
    this.CONNECTIME = ""; 
    this.PID = 0; 
    this.ObjectID = ""; 
    this.MonTime = ""; 
    this.MonDate = ""; 
};

exports.CShfeFtdcSysWarningEventField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.OccurDate = ""; 
    this.OccurTime = ""; 
    this.EvendID = 0; 
    this.ObjectID = ""; 
    this.IPAddress = ""; 
    this.EventName = ""; 
    this.EventNum = 0; 
    this.EventType = 0; 
    this.EventDes = ""; 
    this.ProcessFlag = ""; 
    this.WarningLevel = ""; 
    this.EventDealDes = ""; 
    this.FullEventName = ""; 
};

exports.CShfeFtdcReqQryWarningEventField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.WarningLevel = ""; 
    this.EventType = 0; 
    this.ObjectID = ""; 
    this.EventName = ""; 
};

exports.CShfeFtdcRspQryWarningEventField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.OccurDate = ""; 
    this.OccurTime = ""; 
    this.EvendID = 0; 
    this.ObjectID = ""; 
    this.IPAddress = ""; 
    this.EventName = ""; 
    this.EventNum = 0; 
    this.EventType = 0; 
    this.EventDes = ""; 
    this.ProcessFlag = ""; 
    this.WarningLevel = ""; 
    this.EventDealDes = ""; 
    this.FullEventName = ""; 
};

exports.CShfeFtdcRtnWarningEventField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.OccurDate = ""; 
    this.OccurTime = ""; 
    this.EvendID = 0; 
    this.ObjectID = ""; 
    this.IPAddress = ""; 
    this.EventName = ""; 
    this.EventNum = 0; 
    this.EventType = 0; 
    this.EventDes = ""; 
    this.ProcessFlag = ""; 
    this.WarningLevel = ""; 
    this.EventDealDes = ""; 
    this.FullEventName = ""; 
    this.EventCount = 0; 
};

exports.CShfeFtdcReqQryKeyFileInfoField = function ()
{
    this.FileName = ""; 
    this.PathName = ""; 
};

exports.CShfeFtdcReqQryHostMonitorCfgField = function ()
{
    this.MonitorType = ""; 
    this.PathName = ""; 
    this.Interval = 0; 
};

exports.CShfeFtdcReqQryAppMonitorCfgField = function ()
{
    this.MonitorType = ""; 
    this.FSPosition = ""; 
};

exports.CShfeFtdcReqQryCPUUsageField = function ()
{
    this.ObjectID = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryCPUUsageField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.CPUUsage = 0; 
};

exports.CShfeFtdcRtnCPUUsageField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.CPUUsage = 0; 
};

exports.CShfeFtdcReqQryMemoryUsageField = function ()
{
    this.ObjectID = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryMemoryUsageField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.MemoryUsage = 0; 
};

exports.CShfeFtdcRtnMemoryUsageField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.MemoryUsage = 0; 
};

exports.CShfeFtdcReqQryDiskUsageField = function ()
{
    this.ObjectID = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryDiskUsageField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.DiskUsage = 0; 
};

exports.CShfeFtdcRtnDiskUsageField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.DiskUsage = 0; 
};

exports.CShfeFtdcReqQryObjectAttrField = function ()
{
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryObjectAttrField = function ()
{
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.ValueType = 0; 
    this.AttrValue = ""; 
};

exports.CShfeFtdcRtnObjectAttrField = function ()
{
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.ValueType = 0; 
    this.AttrValue = ""; 
};

exports.CShfeFtdcReqQryHostConfigField = function ()
{
    this.CfgType = ""; 
    this.CfgDataCenter = ""; 
    this.CfgName = ""; 
    this.CfgLocation = ""; 
    this.CfgHostName = ""; 
    this.CfgAttend = ""; 
};

exports.CShfeFtdcReqQryInvalidateOrderField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryInvalidateOrderField = function ()
{
    this.OrderSysID = ""; 
    this.OrderLocalID = ""; 
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.ErrorMsg = ""; 
    this.ParticipantID = ""; 
    this.UserID = ""; 
    this.ClientID = ""; 
    this.InstrumentID = ""; 
    this.Direction = 0; 
    this.CombOffsetFlag = ""; 
    this.CombHedgeFlag = ""; 
    this.LimitPrice = 0; 
    this.VolumeTotalOriginal = 0; 
    this.TimeCondition = 0; 
    this.VolumeCondition = 0; 
    this.MinVolume = 0; 
};

exports.CShfeFtdcRtnInvalidateOrderField = function ()
{
    this.OrderSysID = ""; 
    this.OrderLocalID = ""; 
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.ErrorMsg = ""; 
    this.ParticipantID = ""; 
    this.UserID = ""; 
    this.ClientID = ""; 
    this.InstrumentID = ""; 
    this.Direction = 0; 
    this.CombOffsetFlag = ""; 
    this.CombHedgeFlag = ""; 
    this.LimitPrice = 0; 
    this.VolumeTotalOriginal = 0; 
    this.TimeCondition = 0; 
    this.VolumeCondition = 0; 
    this.MinVolume = 0; 
};

exports.CShfeFtdcReqQryOrderStatusField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryOrderStatusField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.OrderSysID = ""; 
    this.OrderLocalID = ""; 
    this.InsertDate = ""; 
    this.InsertTime = ""; 
    this.OrderStatus = 0; 
    this.ParticipantID = ""; 
    this.UserID = ""; 
    this.ClientID = ""; 
    this.InstrumentID = ""; 
    this.Direction = 0; 
    this.CombOffsetFlag = ""; 
    this.CombHedgeFlag = ""; 
    this.LimitPrice = 0; 
    this.VolumeTotalOriginal = 0; 
    this.TimeCondition = 0; 
    this.VolumeCondition = 0; 
    this.MinVolume = 0; 
};

exports.CShfeFtdcRtnOrderStatusField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.OrderSysID = ""; 
    this.OrderLocalID = ""; 
    this.InsertDate = ""; 
    this.InsertTime = ""; 
    this.OrderStatus = 0; 
    this.ParticipantID = ""; 
    this.UserID = ""; 
    this.ClientID = ""; 
    this.InstrumentID = ""; 
    this.Direction = 0; 
    this.CombOffsetFlag = ""; 
    this.CombHedgeFlag = ""; 
    this.LimitPrice = 0; 
    this.VolumeTotalOriginal = 0; 
    this.TimeCondition = 0; 
    this.VolumeCondition = 0; 
    this.MinVolume = 0; 
};

exports.CShfeFtdcReqQryBargainOrderField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryBargainOrderField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.TradeID = ""; 
    this.OrderSysID = ""; 
    this.InstrumentID = ""; 
    this.Price = 0; 
    this.Volume = 0; 
    this.ParticipantID = ""; 
    this.UserID = ""; 
    this.ClientID = ""; 
};

exports.CShfeFtdcRtnBargainOrderField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.TradeID = ""; 
    this.OrderSysID = ""; 
    this.InstrumentID = ""; 
    this.Price = 0; 
    this.Volume = 0; 
    this.ParticipantID = ""; 
    this.UserID = ""; 
    this.ClientID = ""; 
};

exports.CShfeFtdcReqQryInstPropertyField = function ()
{
    this.StartDate = ""; 
    this.EndDate = ""; 
};

exports.CShfeFtdcRspQryInstPropertyField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.SettlementGroupID = ""; 
    this.UnderlyingInstrID = ""; 
    this.ProductClass = 0; 
    this.PositionType = 0; 
    this.VolumeMultiple = 0; 
    this.UnderlyingMultiple = 0; 
    this.InstLifePhase = 0; 
    this.OpenDate = ""; 
    this.ExpireDate = ""; 
    this.StartDelivDate = ""; 
    this.EndDelivDate = ""; 
    this.BasisPrice = 0; 
    this.MaxMarketOrderVolume = 0; 
    this.MinMarketOrderVolume = 0; 
    this.MaxLimitOrderVolume = 0; 
    this.MinLimitOrderVolume = 0; 
    this.PriceTick = 0; 
    this.AllowDelivPersonOpen = 0; 
};

exports.CShfeFtdcRtnInstPropertyField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.SettlementGroupID = ""; 
    this.UnderlyingInstrID = ""; 
    this.ProductClass = 0; 
    this.PositionType = 0; 
    this.VolumeMultiple = 0; 
    this.UnderlyingMultiple = 0; 
    this.InstLifePhase = 0; 
    this.OpenDate = ""; 
    this.ExpireDate = ""; 
    this.StartDelivDate = ""; 
    this.EndDelivDate = ""; 
    this.BasisPrice = 0; 
    this.MaxMarketOrderVolume = 0; 
    this.MinMarketOrderVolume = 0; 
    this.MaxLimitOrderVolume = 0; 
    this.MinLimitOrderVolume = 0; 
    this.PriceTick = 0; 
    this.AllowDelivPersonOpen = 0; 
};

exports.CShfeFtdcReqQryMarginRateField = function ()
{
    this.StartDate = ""; 
    this.EndDate = ""; 
};

exports.CShfeFtdcRspQryMarginRateField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ParticipantID = ""; 
    this.TradingRole = 0; 
    this.HedgeFlag = 0; 
    this.ValueMode = 0; 
    this.LongMarginRatio = 0; 
    this.ShortMarginRatio = 0; 
};

exports.CShfeFtdcRtnMarginRateField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ParticipantID = ""; 
    this.TradingRole = 0; 
    this.HedgeFlag = 0; 
    this.ValueMode = 0; 
    this.LongMarginRatio = 0; 
    this.ShortMarginRatio = 0; 
};

exports.CShfeFtdcReqQryPriceLimitField = function ()
{
    this.StartDate = ""; 
    this.EndDate = ""; 
};

exports.CShfeFtdcRspQryPriceLimitField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ValueMode = 0; 
    this.RoundingMode = 0; 
    this.UpperLimitPrice = 0; 
    this.LowerLimitPrice = 0; 
};

exports.CShfeFtdcRtnPriceLimitField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ValueMode = 0; 
    this.RoundingMode = 0; 
    this.UpperLimitPrice = 0; 
    this.LowerLimitPrice = 0; 
};

exports.CShfeFtdcReqQryPartPosiLimitField = function ()
{
    this.StartDate = ""; 
    this.EndDate = ""; 
};

exports.CShfeFtdcRspQryPartPosiLimitField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ParticipantID = ""; 
    this.TradingRole = 0; 
    this.StartTotalPosition = 0; 
    this.ValueMode = 0; 
    this.LongPosLimit = 0; 
    this.ShortPosLimit = 0; 
    this.UpperLimitPrice = 0; 
    this.LowerLimitPrice = 0; 
};

exports.CShfeFtdcRtnPartPosiLimitField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ParticipantID = ""; 
    this.TradingRole = 0; 
    this.StartTotalPosition = 0; 
    this.ValueMode = 0; 
    this.LongPosLimit = 0; 
    this.ShortPosLimit = 0; 
    this.UpperLimitPrice = 0; 
    this.LowerLimitPrice = 0; 
};

exports.CShfeFtdcReqQryClientPosiLimitField = function ()
{
    this.StartDate = ""; 
    this.EndDate = ""; 
};

exports.CShfeFtdcRspQryClientPosiLimitField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ClientType = 0; 
    this.TradingRole = 0; 
    this.StartTotalPosition = 0; 
    this.ValueMode = 0; 
    this.LongPosLimit = 0; 
    this.ShortPosLimit = 0; 
    this.UpperLimitPrice = 0; 
    this.LowerLimitPrice = 0; 
};

exports.CShfeFtdcRtnClientPosiLimitField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ClientType = 0; 
    this.TradingRole = 0; 
    this.StartTotalPosition = 0; 
    this.ValueMode = 0; 
    this.LongPosLimit = 0; 
    this.ShortPosLimit = 0; 
    this.UpperLimitPrice = 0; 
    this.LowerLimitPrice = 0; 
};

exports.CShfeFtdcReqQrySpecialPosiLimitField = function ()
{
    this.StartDate = ""; 
    this.EndDate = ""; 
};

exports.CShfeFtdcRspQrySpecialPosiLimitField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ClientID = ""; 
    this.TradingRole = 0; 
    this.StartTotalPosition = 0; 
    this.ValueMode = 0; 
    this.LongPosLimit = 0; 
    this.ShortPosLimit = 0; 
    this.UpperLimitPrice = 0; 
    this.LowerLimitPrice = 0; 
};

exports.CShfeFtdcRtnSpecialPosiLimitField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ClientID = ""; 
    this.TradingRole = 0; 
    this.StartTotalPosition = 0; 
    this.ValueMode = 0; 
    this.LongPosLimit = 0; 
    this.ShortPosLimit = 0; 
    this.UpperLimitPrice = 0; 
    this.LowerLimitPrice = 0; 
};

exports.CShfeFtdcReqQryTransactionChgField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryTransactionChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.BillSN = 0; 
    this.ParticipantAccount = ""; 
    this.ParticipantID = ""; 
    this.Amount = 0; 
};

exports.CShfeFtdcRtnTransactionChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.BillSN = 0; 
    this.ParticipantAccount = ""; 
    this.ParticipantID = ""; 
    this.Amount = 0; 
};

exports.CShfeFtdcReqQryClientChgField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryClientChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.ClientID = ""; 
    this.ClientName = ""; 
    this.ClientType = 0; 
    this.IsActive = 0; 
    this.IdentifiedCardType = ""; 
    this.IdentifiedCardNo = ""; 
    this.OperationType = 0; 
};

exports.CShfeFtdcRtnClientChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.ClientID = ""; 
    this.ClientName = ""; 
    this.ClientType = 0; 
    this.IsActive = 0; 
    this.IdentifiedCardType = ""; 
    this.IdentifiedCardNo = ""; 
    this.OperationType = 0; 
};

exports.CShfeFtdcReqQryPartClientChgField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryPartClientChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.ClientID = ""; 
    this.ParticipantID = ""; 
    this.OperationType = 0; 
};

exports.CShfeFtdcRtnPartClientChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.ClientID = ""; 
    this.ParticipantID = ""; 
    this.OperationType = 0; 
};

exports.CShfeFtdcReqQryPosiLimitChgField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryPosiLimitChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ParticipantID = ""; 
    this.TradingRole = 0; 
    this.StartTotalPosition = 0; 
    this.ValueMode = 0; 
    this.LongPosLimit = 0; 
    this.ShortPosLimit = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcRtnPosiLimitChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ParticipantID = ""; 
    this.TradingRole = 0; 
    this.StartTotalPosition = 0; 
    this.ValueMode = 0; 
    this.LongPosLimit = 0; 
    this.ShortPosLimit = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcReqQryHedgeDetailChgField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryHedgeDetailChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.OperatorID = ""; 
    this.Time = ""; 
    this.InstrumentID = ""; 
    this.PosiDirection = 0; 
    this.TradingVolume = 0; 
    this.HedgeQuota = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcRtnHedgeDetailChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.ParticipantID = ""; 
    this.ClientID = ""; 
    this.OperatorID = ""; 
    this.Time = ""; 
    this.InstrumentID = ""; 
    this.PosiDirection = 0; 
    this.TradingVolume = 0; 
    this.HedgeQuota = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcReqQryParticipantChgField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryParticipantChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.ParticipantID = ""; 
    this.ParticipantName = ""; 
    this.ParticipantAbbr = ""; 
    this.MemberType = 0; 
    this.IsActive = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcRtnParticipantChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.ParticipantID = ""; 
    this.ParticipantName = ""; 
    this.ParticipantAbbr = ""; 
    this.MemberType = 0; 
    this.IsActive = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcReqQryMarginRateChgField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryMarginRateChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ParticipantID = ""; 
    this.TradingRole = 0; 
    this.HedgeFlag = 0; 
    this.ValueMode = 0; 
    this.LongMarginRatio = 0; 
    this.ShortMarginRatio = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcRtnMarginRateChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ParticipantID = ""; 
    this.TradingRole = 0; 
    this.HedgeFlag = 0; 
    this.ValueMode = 0; 
    this.LongMarginRatio = 0; 
    this.ShortMarginRatio = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcReqQryUserIpChgField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryUserIpChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.UserID = ""; 
    this.IPAddress = ""; 
    this.IPMask = ""; 
    this.OperationType = 0; 
};

exports.CShfeFtdcRtnUserIpChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.UserID = ""; 
    this.IPAddress = ""; 
    this.IPMask = ""; 
    this.OperationType = 0; 
};

exports.CShfeFtdcReqQryClientPosiLimitChgField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryClientPosiLimitChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ClientType = 0; 
    this.TradingRole = 0; 
    this.StartTotalPosition = 0; 
    this.ValueMode = 0; 
    this.LongPosLimit = 0; 
    this.ShortPosLimit = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcRtnClientPosiLimitChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ClientType = 0; 
    this.TradingRole = 0; 
    this.StartTotalPosition = 0; 
    this.ValueMode = 0; 
    this.LongPosLimit = 0; 
    this.ShortPosLimit = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcReqQrySpecPosiLimitChgField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQrySpecPosiLimitChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ClientID = ""; 
    this.TradingRole = 0; 
    this.StartTotalPosition = 0; 
    this.ValueMode = 0; 
    this.LongPosLimit = 0; 
    this.ShortPosLimit = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcRtnSpecPosiLimitChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ClientID = ""; 
    this.TradingRole = 0; 
    this.StartTotalPosition = 0; 
    this.ValueMode = 0; 
    this.LongPosLimit = 0; 
    this.ShortPosLimit = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcReqQryHistoryObjectAttrField = function ()
{
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryHistoryObjectAttrField = function ()
{
    this.MonDate = ""; 
    this.BeginTime = ""; 
    this.EndTime = ""; 
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.ValueType = 0; 
    this.FirstValue = 0; 
    this.EndValue = 0; 
    this.AvgValue = 0; 
    this.MinValue = 0; 
    this.MaxValue = 0; 
    this.ValueCount = 0; 
};

exports.CShfeFtdcRtnHistoryObjectAttrField = function ()
{
    this.MonDate = ""; 
    this.BeginTime = ""; 
    this.EndTime = ""; 
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.ValueType = 0; 
    this.FirstValue = 0; 
    this.EndValue = 0; 
    this.AvgValue = 0; 
    this.MinValue = 0; 
    this.MaxValue = 0; 
    this.ValueCount = 0; 
};

exports.CShfeFtdcReqQryFrontInfoField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryFrontInfoField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.FrontId = ""; 
    this.RspCondition = 0; 
    this.ReqCount = 0; 
    this.ReqRate = 0; 
};

exports.CShfeFtdcRtnFrontInfoField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.FrontId = ""; 
    this.RspCondition = 0; 
    this.ReqCount = 0; 
    this.ReqRate = 0; 
};

exports.CShfeFtdcReqQrySysUserLoginField = function ()
{
    this.UserID = ""; 
    this.Password = ""; 
    this.VersionID = ""; 
};

exports.CShfeFtdcRspQrySysUserLoginField = function ()
{
    this.UserID = ""; 
    this.TradingDay = ""; 
    this.LoginTime = ""; 
    this.Privilege = 0; 
    this.VersionFlag = 0; 
};

exports.CShfeFtdcReqQrySysUserLogoutField = function ()
{
    this.UserID = ""; 
};

exports.CShfeFtdcRspQrySysUserLogoutField = function ()
{
    this.UserID = ""; 
};

exports.CShfeFtdcReqQrySysUserPasswordUpdateField = function ()
{
    this.UserID = ""; 
    this.OldPassword = ""; 
    this.NewPassword = ""; 
};

exports.CShfeFtdcRspQrySysUserPasswordUpdateField = function ()
{
    this.UserID = ""; 
    this.PasswordChgMsg = ""; 
};

exports.CShfeFtdcReqQrySysUserRegisterField = function ()
{
    this.UserID = ""; 
    this.UserName = ""; 
    this.UserInfo = ""; 
    this.Password = ""; 
    this.Privilege = 0; 
    this.EMail = ""; 
    this.EMailFlag = 0; 
    this.HomePhone = ""; 
    this.HomePhoneFlag = 0; 
    this.MobilePhone = ""; 
    this.MobilePhoneFlag = 0; 
};

exports.CShfeFtdcRspQrySysUserRegisterField = function ()
{
    this.UserID = ""; 
    this.Privilege = 0; 
};

exports.CShfeFtdcReqQrySysUserDeleteField = function ()
{
    this.UserID = ""; 
};

exports.CShfeFtdcRspQrySysUserDeleteField = function ()
{
    this.UserID = ""; 
};

exports.CShfeFtdcRspQryParticipantInitField = function ()
{
    this.ParticipantID = ""; 
    this.ParticipantName = ""; 
    this.ParticipantAbbr = ""; 
    this.MemberType = 0; 
    this.IsActive = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcRtnParticipantInitField = function ()
{
    this.ParticipantID = ""; 
    this.ParticipantName = ""; 
    this.ParticipantAbbr = ""; 
    this.MemberType = 0; 
    this.IsActive = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcRspQryUserInitField = function ()
{
    this.ParticipantID = ""; 
    this.UserID = ""; 
    this.UserType = 0; 
    this.Password = ""; 
    this.IsActive = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcRtnUserInitField = function ()
{
    this.ParticipantID = ""; 
    this.UserID = ""; 
    this.UserType = 0; 
    this.Password = ""; 
    this.IsActive = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcRspQryClientInitField = function ()
{
    this.ClientID = ""; 
    this.ClientName = ""; 
    this.IdentifiedCardType = ""; 
    this.IdentifiedCardNo = ""; 
    this.TradingRole = 0; 
    this.ClientType = 0; 
    this.IsActive = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcRtnClientInitField = function ()
{
    this.ClientID = ""; 
    this.ClientName = ""; 
    this.IdentifiedCardType = ""; 
    this.IdentifiedCardNo = ""; 
    this.TradingRole = 0; 
    this.ClientType = 0; 
    this.IsActive = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcReqQryTradeLogField = function ()
{
    this.TradingDay = ""; 
    this.IPAddress = ""; 
    this.FrontID = ""; 
    this.StartParticipant = ""; 
    this.EndParticipant = ""; 
    this.StartUser = ""; 
    this.EndUser = ""; 
    this.StartTime = ""; 
    this.EndTime = ""; 
    this.StartSessionID = ""; 
    this.EndSessionID = ""; 
    this.IPFlag = 0; 
    this.PartFlag = 0; 
    this.UserIDFlag = 0; 
    this.TimeFlag = 0; 
    this.FrontFlag = 0; 
    this.SessionFlag = 0; 
};

exports.CShfeFtdcRspQryTradeLogField = function ()
{
    this.bFlag = 0; 
    this.TradeLogStr = ""; 
};

exports.CShfeFtdcRtnTradeLogField = function ()
{
    this.bFlag = 0; 
    this.TradeLogStr = ""; 
};

exports.CShfeFtdcReqQryWarningEventUpdateField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.OccurDate = ""; 
    this.OccurTime = ""; 
    this.EvendID = 0; 
    this.ObjectID = ""; 
    this.IPAddress = ""; 
    this.EventName = ""; 
    this.EventNum = 0; 
    this.EventType = 0; 
    this.EventDes = ""; 
    this.ProcessFlag = ""; 
    this.WarningLevel = ""; 
    this.ActiveDate = ""; 
    this.ActiveTime = ""; 
    this.EventDealDes = ""; 
    this.FullEventName = ""; 
};

exports.CShfeFtdcReqQryTradeUserLoginInfoField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryTradeUserLoginInfoField = function ()
{
    this.ObjectID = ""; 
    this.UserID = ""; 
    this.ParticipantID = ""; 
    this.ProtocolInfo = ""; 
    this.IPAddress = ""; 
    this.FrontID = 0; 
    this.UserType = ""; 
    this.AccessType = ""; 
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.ActionFlag = 0; 
    this.DataCenter = ""; 
};

exports.CShfeFtdcRtnTradeUserLoginInfoField = function ()
{
    this.ObjectID = ""; 
    this.UserID = ""; 
    this.ParticipantID = ""; 
    this.ProtocolInfo = ""; 
    this.IPAddress = ""; 
    this.FrontID = 0; 
    this.UserType = ""; 
    this.AccessType = ""; 
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.ActionFlag = 0; 
    this.DataCenter = ""; 
};

exports.CShfeFtdcReqQryPartTradeField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryPartTradeField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ParticipantID = ""; 
    this.TotalPositiveOrder = 0; 
    this.TotalNegativeOrder = 0; 
    this.TotalPositiveTrade = 0; 
    this.TotalNegativeTrade = 0; 
    this.TotalPositivePosi = 0; 
    this.TotalNegativePosi = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcReqQryTradepeakField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.TradepeakFlag = 0; 
};

exports.CShfeFtdcRspQryTradepeakField = function ()
{
    this.TradepeakFlag = 0; 
    this.PeakTime = ""; 
    this.InsertOrder = 0; 
    this.ActionOrder = 0; 
    this.InvalidOrder = 0; 
    this.TotalBusiness = 0; 
    this.TradeCount = 0; 
    this.TotalCount = 0; 
};

exports.CShfeFtdcRtnUpdateSysConfigField = function ()
{
    this.UpdateType = ""; 
    this.OldValue = ""; 
    this.NewValue = ""; 
    this.Standby = ""; 
};

exports.CShfeFtdcRtnSysUserField = function ()
{
    this.UserID = ""; 
    this.UserName = ""; 
    this.UserInfo = ""; 
    this.Password = ""; 
    this.Privilege = 0; 
    this.EMail = ""; 
    this.EMailFlag = 0; 
    this.HomePhone = ""; 
    this.HomePhoneFlag = 0; 
    this.MobilePhone = ""; 
    this.MobilePhoneFlag = 0; 
};

exports.CShfeFtdcRtnPriceLimitChgField = function ()
{
    this.ActionDate = ""; 
    this.ActionTime = ""; 
    this.InstrumentID = ""; 
    this.ValueMode = 0; 
    this.RoundingMode = 0; 
    this.UpperLimitPrice = 0; 
    this.LowerLimitPrice = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcReqQryParticipantInitField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcReqQryUserInitField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcSysFileAccessInfoField = function ()
{
    this.ObjectID = ""; 
    this.FileSize = 0; 
    this.FileTime = 0; 
};

exports.CShfeFtdcReqQryHistoryCpuInfoField = function ()
{
    this.HostName = ""; 
    this.CPU = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryHistoryCpuInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.CPU = ""; 
    this.LOAD = 0; 
    this.USER = 0; 
    this.NICE = 0; 
    this.SYS = 0; 
    this.IDLE = 0; 
    this.BLOCK = 0; 
    this.SWAIT = 0; 
    this.INTR = 0; 
    this.SSYS = 0; 
};

exports.CShfeFtdcReqQryHistoryMemInfoField = function ()
{
    this.HostName = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryHistoryMemInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.TOTALREAL = 0; 
    this.ACTIVEREAL = 0; 
    this.TOTALVIRTUAL = 0; 
    this.ACTIVEVIRTUAL = 0; 
    this.FREE = 0; 
};

exports.CShfeFtdcReqQryHistoryNetworkInfoField = function ()
{
    this.HostName = ""; 
    this.LANNAME = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryHistoryNetworkInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.LANNAME = ""; 
    this.LANSTATUS = ""; 
    this.IPADDRESS = ""; 
    this.RECVBYTES = 0; 
    this.RECVPACKETS = 0; 
    this.RECVERRORPACKETS = 0; 
    this.RECVDROPPACKETS = 0; 
    this.SENDBYTES = 0; 
    this.SENDPACKETS = 0; 
    this.SENDERRORPACKETS = 0; 
    this.SENDDROPPACKETS = 0; 
};

exports.CShfeFtdcRspQryHostConfigField = function ()
{
    this.CfgType = ""; 
    this.CfgDataCenter = ""; 
    this.CfgName = ""; 
    this.CfgLocation = ""; 
    this.CfgHostName = ""; 
    this.CfgAttend = ""; 
};

exports.CShfeFtdcReqQryMonitorOnlineUserField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryMonitorOnlineUserField = function ()
{
    this.UserID = ""; 
    this.IPAddress = ""; 
};

exports.CShfeFtdcReqQryFrontStatField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryFrontStatField = function ()
{
    this.FrontID = 0; 
    this.PositiveOrder = 0; 
    this.NegativeOrder = 0; 
    this.TotalPositiveOrder = 0; 
    this.TotalNegativeOrder = 0; 
    this.OrderAction = 0; 
    this.TotalOrderAction = 0; 
};

exports.CShfeFtdcRtnSysTimeSyncField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
};

exports.CShfeFtdcRtnDataCenterChgField = function ()
{
    this.DataCenterID = ""; 
};

exports.CShfeFtdcReqQryHistoryTradePeakField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryHistoryTradePeakField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.AttrType = ""; 
    this.AttrValue = 0; 
    this.RltAttrType = ""; 
    this.RltAttrValue = 0; 
    this.MaxMonDate = ""; 
    this.MaxMonTime = ""; 
    this.MaxAttrValue = 0; 
    this.MaxRltAttrValue = 0; 
    this.OldMonDate = ""; 
    this.OldMonTime = ""; 
    this.OldAttrValue = 0; 
    this.OldRltAttrValue = 0; 
};

exports.CShfeFtdcRtnHistoryTradePeakField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.AttrType = ""; 
    this.AttrValue = 0; 
    this.RltAttrType = ""; 
    this.RltAttrValue = 0; 
    this.MaxMonDate = ""; 
    this.MaxMonTime = ""; 
    this.MaxAttrValue = 0; 
    this.MaxRltAttrValue = 0; 
    this.OldMonDate = ""; 
    this.OldMonTime = ""; 
    this.OldAttrValue = 0; 
    this.OldRltAttrValue = 0; 
};

exports.CShfeFtdcReqQrySyslogEventField = function ()
{
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.EventType = 0; 
    this.WarningLevel = ""; 
    this.ObjectID = ""; 
    this.EventName = ""; 
    this.IPAddress = ""; 
};

exports.CShfeFtdcRspQrySyslogEventField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.OccurDate = ""; 
    this.OccurTime = ""; 
    this.EvendID = 0; 
    this.ObjectID = ""; 
    this.IPAddress = ""; 
    this.EventName = ""; 
    this.EventNum = 0; 
    this.EventType = 0; 
    this.EventDes = ""; 
    this.ProcessFlag = ""; 
    this.WarningLevel = ""; 
    this.EventDealDes = ""; 
    this.FullEventName = ""; 
    this.EventCount = 0; 
};

exports.CShfeFtdcRtnSyslogEventField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.OccurDate = ""; 
    this.OccurTime = ""; 
    this.EvendID = 0; 
    this.ObjectID = ""; 
    this.IPAddress = ""; 
    this.EventName = ""; 
    this.EventNum = 0; 
    this.EventType = 0; 
    this.EventDes = ""; 
    this.ProcessFlag = ""; 
    this.WarningLevel = ""; 
    this.EventDealDes = ""; 
    this.FullEventName = ""; 
};

exports.CShfeFtdcReqQrySyslogEventSubcriberField = function ()
{
    this.ObjectID = ""; 
    this.EventName = ""; 
    this.WarningLevel = ""; 
    this.filter = ""; 
    this.antifilter = ""; 
    this.ObjectNum = 0; 
    this.KeepAlive = 0; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.ProcessFlag = ""; 
};

exports.CShfeFtdcReqQryTradeDayChangeField = function ()
{
    this.ChangeType = ""; 
    this.OldDate = ""; 
    this.NewDate = ""; 
};

exports.CShfeFtdcRspQryTradeDayChangeField = function ()
{
    this.ChangeType = ""; 
    this.OldDate = ""; 
    this.NewDate = ""; 
};

exports.CShfeFtdcReqQryTomcatInfoField = function ()
{
    this.ObjectID = ""; 
    this.SubObjectID = ""; 
    this.AttrType = ""; 
};

exports.CShfeFtdcRspQryWebAppInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.AppName = ""; 
    this.Status = ""; 
    this.Desc = ""; 
    this.StartTime = ""; 
    this.ServletNum = ""; 
    this.ProcessTime = ""; 
    this.RequestNum = ""; 
    this.ErrorNum = ""; 
    this.SessionSize = ""; 
    this.TimeOut = ""; 
    this.JDBCUsage = ""; 
    this.JSPNum = ""; 
};

exports.CShfeFtdcRtnWebAppInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.AppName = ""; 
    this.Status = ""; 
    this.Desc = ""; 
    this.StartTime = ""; 
    this.ServletNum = ""; 
    this.ProcessTime = ""; 
    this.RequestNum = ""; 
    this.ErrorNum = ""; 
    this.SessionSize = ""; 
    this.TimeOut = ""; 
    this.JDBCUsage = ""; 
    this.JSPNum = ""; 
};

exports.CShfeFtdcRspQryServletInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.Name = ""; 
    this.LoadTime = 0; 
    this.RequestNum = 0; 
    this.RequestErrNum = 0; 
    this.ProcessTime = 0; 
    this.MixTime = 0; 
    this.MaxTime = 0; 
};

exports.CShfeFtdcRtnServletInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.Name = ""; 
    this.LoadTime = 0; 
    this.RequestNum = 0; 
    this.RequestErrNum = 0; 
    this.ProcessTime = 0; 
    this.MixTime = 0; 
    this.MaxTime = 0; 
};

exports.CShfeFtdcRspQryFileInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.PathName = ""; 
    this.FileSize = ""; 
    this.LastModDate = ""; 
    this.FileType = ""; 
};

exports.CShfeFtdcRtnFileInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.PathName = ""; 
    this.FileSize = ""; 
    this.LastModDate = ""; 
    this.FileType = ""; 
};

exports.CShfeFtdcRspQrySessionInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.SessionID = ""; 
    this.SessionName = ""; 
    this.RemoteIP = ""; 
    this.BeginTime = ""; 
    this.LatestTime = ""; 
    this.MaxIdleTime = 0; 
};

exports.CShfeFtdcRtnSessionInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.SessionID = ""; 
    this.SessionName = ""; 
    this.RemoteIP = ""; 
    this.BeginTime = ""; 
    this.LatestTime = ""; 
    this.MaxIdleTime = 0; 
};

exports.CShfeFtdcRspQryJDBCInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.AppName = ""; 
    this.Name = ""; 
    this.Usage = 0; 
    this.ConnNumMax = 0; 
    this.ConnNumFree = 0; 
    this.ConnNumUnRU = 0; 
    this.ConnNumRU = 0; 
    this.UserName = ""; 
    this.Type = ""; 
    this.URL = ""; 
};

exports.CShfeFtdcRtnJDBCInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.AppName = ""; 
    this.Name = ""; 
    this.Usage = 0; 
    this.ConnNumMax = 0; 
    this.ConnNumFree = 0; 
    this.ConnNumUnRU = 0; 
    this.ConnNumRU = 0; 
    this.UserName = ""; 
    this.Type = ""; 
    this.URL = ""; 
};

exports.CShfeFtdcRspQryThreadInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.Name = ""; 
    this.ThreadNum = 0; 
    this.ThreadStatus = ""; 
    this.InNative = 0; 
    this.Suspended = ""; 
    this.BlockCount = ""; 
    this.WaitCount = 0; 
    this.CpuTime = 0; 
    this.UserTime = 0; 
};

exports.CShfeFtdcRtnThreadInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.Name = ""; 
    this.ThreadNum = 0; 
    this.ThreadStatus = ""; 
    this.InNative = 0; 
    this.Suspended = ""; 
    this.BlockCount = ""; 
    this.WaitCount = 0; 
    this.CpuTime = 0; 
    this.UserTime = 0; 
};

exports.CShfeFtdcReqQryVMInfoField = function ()
{
    this.ObjectID = ""; 
    this.SubObjectID = ""; 
    this.AttrType = ""; 
};

exports.CShfeFtdcRspQryVMInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.Name = ""; 
    this.VmName = ""; 
    this.VmVendor = ""; 
    this.VmVersion = ""; 
    this.StartTime = ""; 
    this.BootClassPath = ""; 
    this.ClassPath = ""; 
    this.LibraryPath = ""; 
    this.Arguments = ""; 
};

exports.CShfeFtdcRtnVMInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.Name = ""; 
    this.VmName = ""; 
    this.VmVendor = ""; 
    this.VmVersion = ""; 
    this.StartTime = ""; 
    this.BootClassPath = ""; 
    this.ClassPath = ""; 
    this.LibraryPath = ""; 
    this.Arguments = ""; 
};

exports.CShfeFtdcReqQryPropertyInfoField = function ()
{
    this.ObjectID = ""; 
    this.SubObjectID = ""; 
    this.AttrType = ""; 
};

exports.CShfeFtdcRspQryPropertyInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.Property = ""; 
    this.ClipFlag = 0; 
    this.Value = ""; 
};

exports.CShfeFtdcRtnPropertyInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.Property = ""; 
    this.ClipFlag = 0; 
    this.Value = ""; 
};

exports.CShfeFtdcReqQryMemPoolInfoField = function ()
{
    this.ObjectID = ""; 
    this.SubObjectID = ""; 
    this.AttrType = ""; 
};

exports.CShfeFtdcRspQryMemPoolInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.PoolName = ""; 
    this.Usage = ""; 
    this.committedbytes = ""; 
    this.initbytes = ""; 
    this.maxbytes = ""; 
    this.usedbytes = ""; 
    this.Type = ""; 
};

exports.CShfeFtdcRtnMemPoolInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.PoolName = ""; 
    this.Usage = ""; 
    this.committedbytes = ""; 
    this.initbytes = ""; 
    this.maxbytes = ""; 
    this.usedbytes = ""; 
    this.Type = ""; 
};

exports.CShfeFtdcReqQryFileContentInfoField = function ()
{
    this.ObjectID = ""; 
    this.SubObjectID = ""; 
    this.AttrType = ""; 
};

exports.CShfeFtdcRspQryFileContentInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.FileName = ""; 
    this.FileContent = ""; 
};

exports.CShfeFtdcRtnFileContentInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.FileName = ""; 
    this.FileContent = ""; 
};

exports.CShfeFtdcReqQryConnectionInfoField = function ()
{
    this.ObjectID = ""; 
    this.SubObjectID = ""; 
    this.AttrType = ""; 
};

exports.CShfeFtdcRspQryConnectionInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.ServiceName = ""; 
    this.Stage = ""; 
    this.RequestCount = 0; 
    this.ErrorCount = 0; 
    this.ProcTime = 0; 
    this.BytesReceived = 0; 
    this.BytesSent = 0; 
    this.RemoteIP = ""; 
    this.MaxAccessURI = ""; 
};

exports.CShfeFtdcRtnConnectionInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.ServiceName = ""; 
    this.Stage = ""; 
    this.RequestCount = 0; 
    this.ErrorCount = 0; 
    this.ProcTime = 0; 
    this.BytesReceived = 0; 
    this.BytesSent = 0; 
    this.RemoteIP = ""; 
    this.MaxAccessURI = ""; 
};

exports.CShfeFtdcReqQryConnectorInfoField = function ()
{
    this.ObjectID = ""; 
    this.SubObjectID = ""; 
    this.AttrType = ""; 
};

exports.CShfeFtdcRspQryConnectorInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.Name = ""; 
    this.ThreadsCount = ""; 
    this.BusyThreadsCount = ""; 
    this.MaxThreads = ""; 
    this.MaxSpareThreads = ""; 
    this.MinSpareThreads = ""; 
    this.MaxTime = ""; 
    this.MaxProcTime = ""; 
    this.RequestCount = ""; 
    this.ErrorCount = ""; 
    this.BytesReceived = ""; 
    this.BytesSent = ""; 
};

exports.CShfeFtdcRtnConnectorInfoField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.Name = ""; 
    this.ThreadsCount = ""; 
    this.BusyThreadsCount = ""; 
    this.MaxThreads = ""; 
    this.MaxSpareThreads = ""; 
    this.MinSpareThreads = ""; 
    this.MaxTime = ""; 
    this.MaxProcTime = ""; 
    this.RequestCount = ""; 
    this.ErrorCount = ""; 
    this.BytesReceived = ""; 
    this.BytesSent = ""; 
};

exports.CShfeFtdcReqQryDBQueryField = function ()
{
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRspQryDBQueryField = function ()
{
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.DBQueryResult = ""; 
};

exports.CShfeFtdcRtnDBQueryField = function ()
{
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.DBQueryResult = ""; 
};

exports.CShfeFtdcSysGeneralFieldField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.ObjectID = ""; 
    this.SubObjectID = ""; 
    this.AttrType = ""; 
    this.Content = ""; 
};

exports.CShfeFtdcReqQryGetFileField = function ()
{
    this.FileName = ""; 
    this.Version = ""; 
    this.Offset = 0; 
};

exports.CShfeFtdcRspQryGetFileField = function ()
{
    this.FileName = ""; 
    this.Version = ""; 
    this.Offset = 0; 
    this.Length = 0; 
    this.Comment = ""; 
};

exports.CShfeFtdcReqQrySyslogEventUpdateField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.OccurDate = ""; 
    this.OccurTime = ""; 
    this.EvendID = 0; 
    this.ObjectID = ""; 
    this.IPAddress = ""; 
    this.EventName = ""; 
    this.EventNum = 0; 
    this.EventType = 0; 
    this.EventDes = ""; 
    this.ProcessFlag = ""; 
    this.WarningLevel = ""; 
    this.EventDealDes = ""; 
    this.FullEventName = ""; 
};

exports.CShfeFtdcReqQryWarningQueryField = function ()
{
    this.EvendID = 0; 
};

exports.CShfeFtdcRspQryWarningQueryField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.EvendID = 0; 
    this.DBQueryResult = ""; 
};

exports.CShfeFtdcRtnWarningQueryField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.EvendID = 0; 
    this.DBQueryResult = ""; 
};

exports.CShfeFtdcReqQryWebVisitField = function ()
{
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.BeginDate = ""; 
    this.BeginTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
};

exports.CShfeFtdcRtnHostConfigField = function ()
{
    this.CfgType = ""; 
    this.CfgDataCenter = ""; 
    this.CfgName = ""; 
    this.CfgLocation = ""; 
    this.CfgHostName = ""; 
    this.CfgAttend = ""; 
};

exports.CShfeFtdcReqQryWarningActiveChangeField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.WarningActive = 0; 
};

exports.CShfeFtdcRspQryWarningActiveChangeField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.WarningActive = 0; 
};

exports.CShfeFtdcRtnWarningActiveChangeField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.WarningActive = 0; 
};

exports.CShfeFtdcReqQryGeneralOperateField = function ()
{
    this.GeneralOperateType = 0; 
    this.GeneralOperateTable = ""; 
    this.GeneralOperateOption = ""; 
    this.GeneralOperateSet = ""; 
};

exports.CShfeFtdcRspQryGeneralOperateField = function ()
{
    this.GeneralOperateType = 0; 
    this.GeneralOperateTable = ""; 
    this.GeneralOperateOption = ""; 
    this.GeneralOperateSet = ""; 
};

exports.CShfeFtdcRtnGeneralOperateField = function ()
{
    this.GeneralOperateType = 0; 
    this.GeneralOperateTable = ""; 
    this.GeneralOperateOption = ""; 
    this.GeneralOperateSet = ""; 
};

exports.CShfeFtdcReqQryNetDeviceLinkedField = function ()
{
    this.OperationType = 0; 
    this.SysNetSubAreaID = 0; 
    this.FuctionArea = ""; 
    this.IPDECODE = 0; 
    this.ObjectID = ""; 
};

exports.CShfeFtdcRspQryNetDeviceLinkedField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.NetDeviceID = 0; 
    this.NetPortID = 0; 
    this.NetObjectID = ""; 
    this.NetPortType = ""; 
    this.LinkNetDeviceID = 0; 
    this.LinkNetPortID = 0; 
    this.LinkNetObjectID = ""; 
    this.LinkNetPortType = ""; 
    this.LinkSource = 0; 
};

exports.CShfeFtdcRtnNetDeviceLinkedField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.NetDeviceID = 0; 
    this.NetPortID = 0; 
    this.NetObjectID = ""; 
    this.NetPortType = ""; 
    this.LinkNetDeviceID = 0; 
    this.LinkNetPortID = 0; 
    this.LinkNetObjectID = ""; 
    this.LinkNetPortType = ""; 
    this.LinkSource = 0; 
};

exports.CShfeFtdcReqQryTradeUserLoginStatField = function ()
{
    this.ObjectID = ""; 
};

exports.CShfeFtdcRspQryTradeUserLoginStatField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.ObjectID = ""; 
    this.IPAddress = ""; 
    this.ParticipantID = ""; 
    this.UserID = ""; 
    this.FrontId = ""; 
};

exports.CShfeFtdcReqQryTradeFrontOrderRttStatField = function ()
{
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonStartTime = ""; 
    this.MonEndTime = ""; 
};

exports.CShfeFtdcRspQryTradeFrontOrderRttStatField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.ObjectID = ""; 
    this.OrderCount = 0; 
    this.OrderRttSum = 0; 
    this.OrderMaxRtt = 0; 
    this.OrderMinRtt = 0; 
    this.OrderRttSqu = 0; 
    this.OrderRttCutDistrib = ""; 
};

exports.CShfeFtdcRtnTradeFrontOrderRttStatField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.ObjectID = ""; 
    this.OrderCount = 0; 
    this.OrderRttSum = 0; 
    this.OrderMaxRtt = 0; 
    this.OrderMinRtt = 0; 
    this.OrderRttSqu = 0; 
    this.OrderRttCutDistrib = ""; 
};

exports.CShfeFtdcReqQryParticTradeOrderStatesField = function ()
{
    this.ParticipantID = ""; 
    this.UserID = ""; 
    this.MonDate = ""; 
    this.MonStartTime = ""; 
    this.MonEndTime = ""; 
};

exports.CShfeFtdcRspQryParticTradeOrderStatesField = function ()
{
    this.ParticipantID = ""; 
    this.UserID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.StaticWidth = 0; 
    this.FrontID = 0; 
    this.OrderCount = 0; 
    this.CancleCount = 0; 
    this.QueryCount = 0; 
    this.TradeCount = 0; 
    this.TradeMoney = 0; 
    this.OrderCntMax = 0; 
    this.CancleCntMax = 0; 
    this.QueryCntMax = 0; 
    this.TradeCntMax = 0; 
    this.TradeMoneyMax = 0; 
};

exports.CShfeFtdcRtnParticTradeOrderStatesField = function ()
{
    this.ParticipantID = ""; 
    this.UserID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.StaticWidth = 0; 
    this.FrontID = 0; 
    this.OrderCount = 0; 
    this.CancleCount = 0; 
    this.QueryCount = 0; 
    this.TradeCount = 0; 
    this.TradeMoney = 0; 
    this.OrderCntMax = 0; 
    this.CancleCntMax = 0; 
    this.QueryCntMax = 0; 
    this.TradeCntMax = 0; 
    this.TradeMoneyMax = 0; 
};

exports.CShfeFtdcReqQryRouterInfoField = function ()
{
    this.HostName = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryRouterInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.Dev = ""; 
    this.Destination = ""; 
    this.Gateway = ""; 
    this.Mask = ""; 
    this.Flag = ""; 
    this.RefCnt = 0; 
    this.Use = 0; 
    this.Metric = 0; 
    this.Mtu = 0; 
    this.Win = 0; 
    this.Rtt = 0; 
};

exports.CShfeFtdcRtnRouterInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.Dev = ""; 
    this.Destination = ""; 
    this.Gateway = ""; 
    this.Mask = ""; 
    this.Flag = ""; 
    this.RefCnt = 0; 
    this.Use = 0; 
    this.Metric = 0; 
    this.Mtu = 0; 
    this.Win = 0; 
    this.Rtt = 0; 
};

exports.CShfeFtdcReqQryDiskIOField = function ()
{
    this.HostName = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryDiskIOField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.PartName = ""; 
    this.ReadMerges = 0; 
    this.WriteMerges = 0; 
    this.ReadIOs = 0; 
    this.WriteIOs = 0; 
    this.ReadKBs = 0; 
    this.WriteKBs = 0; 
    this.SizeVal = 0; 
    this.QueueVal = 0; 
    this.Svc_t = 0; 
    this.Busy = 0; 
};

exports.CShfeFtdcRtnDiskIOField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.PartName = ""; 
    this.ReadMerges = 0; 
    this.WriteMerges = 0; 
    this.ReadIOs = 0; 
    this.WriteIOs = 0; 
    this.ReadKBs = 0; 
    this.WriteKBs = 0; 
    this.SizeVal = 0; 
    this.QueueVal = 0; 
    this.Svc_t = 0; 
    this.Busy = 0; 
};

exports.CShfeFtdcReqQryStatInfoField = function ()
{
    this.HostName = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryStatInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.ProcRun = 0; 
    this.ProcBlk = 0; 
    this.SwapIn = 0; 
    this.SwapOut = 0; 
    this.BlockIn = 0; 
    this.BlockOut = 0; 
    this.Inter = 0; 
    this.Context = 0; 
    this.CPUUser = 0; 
    this.CPUSys = 0; 
    this.CPUIdle = 0; 
    this.CPUIOWait = 0; 
    this.CPUSteal = 0; 
};

exports.CShfeFtdcRtnStatInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.ProcRun = 0; 
    this.ProcBlk = 0; 
    this.SwapIn = 0; 
    this.SwapOut = 0; 
    this.BlockIn = 0; 
    this.BlockOut = 0; 
    this.Inter = 0; 
    this.Context = 0; 
    this.CPUUser = 0; 
    this.CPUSys = 0; 
    this.CPUIdle = 0; 
    this.CPUIOWait = 0; 
    this.CPUSteal = 0; 
};

exports.CShfeFtdcReqQryTradeOrderRttCutLineField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.UserName = ""; 
    this.OrderRttCutLine = ""; 
    this.OrderRttWidth = 0; 
};

exports.CShfeFtdcRspQryTradeOrderRttCutLineField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.UserName = ""; 
    this.OrderRttCutLine = ""; 
    this.OrderRttWidth = 0; 
};

exports.CShfeFtdcRtnTradeOrderRttCutLineField = function ()
{
    this.MonDate = ""; 
    this.OrderRttCutLine = ""; 
};

exports.CShfeFtdcReqQryClientInfoField = function ()
{
    this.ClientID = ""; 
    this.ClientName = ""; 
};

exports.CShfeFtdcRspQryClientInfoField = function ()
{
    this.ClientID = ""; 
    this.ClientName = ""; 
    this.IdentifiedCardType = ""; 
    this.IdentifiedCardNo = ""; 
    this.TradingRole = 0; 
    this.ClientType = 0; 
    this.IsActive = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcRtnClientInfoField = function ()
{
    this.ClientID = ""; 
    this.ClientName = ""; 
    this.IdentifiedCardType = ""; 
    this.IdentifiedCardNo = ""; 
    this.TradingRole = 0; 
    this.ClientType = 0; 
    this.IsActive = 0; 
    this.OperationType = 0; 
};

exports.CShfeFtdcReqQryEventDescriptionField = function ()
{
    this.EventDesID = ""; 
    this.UserName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.EventDes = ""; 
};

exports.CShfeFtdcRspQryEventDescriptionField = function ()
{
    this.EventDesID = ""; 
    this.UserName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.EventDes = ""; 
};

exports.CShfeFtdcRtnEventDescriptionField = function ()
{
    this.EventDesID = ""; 
    this.UserName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.EventDes = ""; 
};

exports.CShfeFtdcReqQryFrontUniqueIDField = function ()
{
    this.FrontID = 0; 
    this.FrontName = ""; 
};

exports.CShfeFtdcRspQryFrontUniqueIDField = function ()
{
    this.FrontID = 0; 
    this.FrontName = ""; 
};

exports.CShfeFtdcRtnFrontUniqueIDField = function ()
{
    this.FrontID = 0; 
    this.FrontName = ""; 
};

exports.CShfeFtdcReqQryNetPartyLinkAddrChangeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.RelationID = 0; 
    this.OLDADDRESS = ""; 
    this.NEWADDRESS = ""; 
    this.OPERATOR = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
};

exports.CShfeFtdcRspQryNetPartyLinkAddrChangeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.RelationID = 0; 
    this.OLDADDRESS = ""; 
    this.NEWADDRESS = ""; 
    this.OPERATOR = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
};

exports.CShfeFtdcRtnNetPartyLinkAddrChangeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.RelationID = 0; 
    this.OLDADDRESS = ""; 
    this.NEWADDRESS = ""; 
    this.OPERATOR = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
};

exports.CShfeFtdcReqQryNetDelPartyLinkInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.MEMBER_NO = ""; 
    this.MEMBER_NAME = ""; 
    this.REMOTE_ADDR = ""; 
    this.LOCAL_ADDR = ""; 
    this.ADDRESS = ""; 
    this.LINE_STATUS = ""; 
    this.CONTACT = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.EMAIL = ""; 
    this.FAX = ""; 
    this.PROVINCE = ""; 
    this.DDN_NO = ""; 
    this.IN_MODE = ""; 
    this.IP_WAN = ""; 
    this.IP_LAN = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.INTERFACE_DATE = ""; 
    this.SOFTWARE = ""; 
    this.FEE_TYPE = ""; 
    this.SERVICEPROVIDER = ""; 
    this.IF_ZIYING = ""; 
    this.IF_TUOGUAN = ""; 
    this.HASOTHER = ""; 
    this.SEAT_NO = ""; 
    this.PRO = ""; 
};

exports.CShfeFtdcRspQryNetDelPartyLinkInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.MEMBER_NO = ""; 
    this.MEMBER_NAME = ""; 
    this.REMOTE_ADDR = ""; 
    this.LOCAL_ADDR = ""; 
    this.ADDRESS = ""; 
    this.LINE_STATUS = ""; 
    this.CONTACT = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.EMAIL = ""; 
    this.FAX = ""; 
    this.PROVINCE = ""; 
    this.DDN_NO = ""; 
    this.IN_MODE = ""; 
    this.IP_WAN = ""; 
    this.IP_LAN = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.INTERFACE_DATE = ""; 
    this.SOFTWARE = ""; 
    this.FEE_TYPE = ""; 
    this.SERVICEPROVIDER = ""; 
    this.IF_ZIYING = ""; 
    this.IF_TUOGUAN = ""; 
    this.HASOTHER = ""; 
    this.SEAT_NO = ""; 
    this.PRO = ""; 
};

exports.CShfeFtdcRtnNetDelPartyLinkInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.MEMBER_NO = ""; 
    this.MEMBER_NAME = ""; 
    this.REMOTE_ADDR = ""; 
    this.LOCAL_ADDR = ""; 
    this.ADDRESS = ""; 
    this.LINE_STATUS = ""; 
    this.CONTACT = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.EMAIL = ""; 
    this.FAX = ""; 
    this.PROVINCE = ""; 
    this.DDN_NO = ""; 
    this.IN_MODE = ""; 
    this.IP_WAN = ""; 
    this.IP_LAN = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.INTERFACE_DATE = ""; 
    this.SOFTWARE = ""; 
    this.FEE_TYPE = ""; 
    this.SERVICEPROVIDER = ""; 
    this.IF_ZIYING = ""; 
    this.IF_TUOGUAN = ""; 
    this.HASOTHER = ""; 
    this.SEAT_NO = ""; 
    this.PRO = ""; 
};

exports.CShfeFtdcReqQryPerformanceTopField = function ()
{
    this.OperationType = 0; 
    this.AttrType = ""; 
    this.NetArea = 0; 
    this.NetSubArea = ""; 
    this.KeyWord = ""; 
    this.SortValue = 0; 
    this.SortType = 0; 
    this.DuringTimeType = 0; 
    this.DuringTimeValue = 0; 
    this.TopN = 0; 
    this.TopResult = ""; 
};

exports.CShfeFtdcRspQryPerformanceTopField = function ()
{
    this.OperationType = 0; 
    this.AttrType = ""; 
    this.NetArea = 0; 
    this.NetSubArea = ""; 
    this.KeyWord = ""; 
    this.SortValue = 0; 
    this.SortType = 0; 
    this.DuringTimeType = 0; 
    this.DuringTimeValue = 0; 
    this.TopN = 0; 
    this.TopResult = ""; 
};

exports.CShfeFtdcRtnPerformanceTopField = function ()
{
    this.OperationType = 0; 
    this.AttrType = ""; 
    this.NetArea = 0; 
    this.NetSubArea = ""; 
    this.KeyWord = ""; 
    this.SortValue = 0; 
    this.SortType = 0; 
    this.DuringTimeType = 0; 
    this.DuringTimeValue = 0; 
    this.TopN = 0; 
    this.TopResult = ""; 
};

exports.CShfeFtdcReqQryInstrumentStatusField = function ()
{
    this.SettlementGroupID = ""; 
    this.InstrumentID = ""; 
    this.InstrumentStatus = 0; 
    this.TradingSegmentSN = 0; 
    this.EnterTime = ""; 
    this.EnterReason = 0; 
    this.EnterDate = ""; 
};

exports.CShfeFtdcRspQryInstrumentStatusField = function ()
{
    this.SettlementGroupID = ""; 
    this.InstrumentID = ""; 
    this.InstrumentStatus = 0; 
    this.TradingSegmentSN = 0; 
    this.EnterTime = ""; 
    this.EnterReason = 0; 
    this.EnterDate = ""; 
};

exports.CShfeFtdcRtnInstrumentStatusField = function ()
{
    this.SettlementGroupID = ""; 
    this.InstrumentID = ""; 
    this.InstrumentStatus = 0; 
    this.TradingSegmentSN = 0; 
    this.EnterTime = ""; 
    this.EnterReason = 0; 
    this.EnterDate = ""; 
};

exports.CShfeFtdcReqQryCurrTradingSegmentAttrField = function ()
{
    this.SettlementGroupID = ""; 
    this.TradingSegmentSN = 0; 
    this.TradingSegmentName = ""; 
    this.StartTime = ""; 
    this.InstrumentStatus = 0; 
    this.InstrumentID = ""; 
    this.AdvanceDays = 0; 
};

exports.CShfeFtdcRspQryCurrTradingSegmentAttrField = function ()
{
    this.SettlementGroupID = ""; 
    this.TradingSegmentSN = 0; 
    this.TradingSegmentName = ""; 
    this.StartTime = ""; 
    this.InstrumentStatus = 0; 
    this.InstrumentID = ""; 
    this.AdvanceDays = 0; 
};

exports.CShfeFtdcRtnCurrTradingSegmentAttrField = function ()
{
    this.SettlementGroupID = ""; 
    this.TradingSegmentSN = 0; 
    this.TradingSegmentName = ""; 
    this.StartTime = ""; 
    this.InstrumentStatus = 0; 
    this.InstrumentID = ""; 
    this.AdvanceDays = 0; 
};

exports.CShfeFtdcReqQryRealTimeNetObjectAttrField = function ()
{
    this.ObjectID = ""; 
    this.AttrType = ""; 
};

exports.CShfeFtdcReqQryNetAreaField = function ()
{
    this.ID = 0; 
};

exports.CShfeFtdcRspQryNetAreaField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRtnNetAreaField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcReqQryNetSubAreaField = function ()
{
    this.ID = 0; 
    this.SysNetAreaID = 0; 
};

exports.CShfeFtdcRspQryNetSubAreaField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SysNetAreaID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRtnNetSubAreaField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SysNetAreaID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcReqQryNetSubAreaIPField = function ()
{
    this.ID = 0; 
    this.SysNetAreaID = 0; 
    this.SysNetSubAreaID = 0; 
};

exports.CShfeFtdcRspQryNetSubAreaIPField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SysNetSubAreaID = 0; 
    this.IP = ""; 
    this.Mask = ""; 
};

exports.CShfeFtdcRtnNetSubAreaIPField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SysNetSubAreaID = 0; 
    this.IP = ""; 
    this.Mask = ""; 
};

exports.CShfeFtdcReqQryNetDeviceDetectField = function ()
{
    this.SysNetAreaID = 0; 
    this.SysNetSubAreaID = 0; 
    this.IP = ""; 
    this.Mask = ""; 
};

exports.CShfeFtdcReqQryNetDeviceRequestField = function ()
{
    this.OperationType = 0; 
    this.SysNetSubAreaID = 0; 
    this.FuctionArea = ""; 
    this.IPDECODE = 0; 
};

exports.CShfeFtdcRspQryNetDeviceField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.MonitorType_ID = 0; 
    this.SysNetSubAreaID = 0; 
    this.CATEGORY_ID = 0; 
    this.FuctionArea = ""; 
    this.IPADDR = ""; 
    this.IPDECODE = 0; 
    this.NAME = ""; 
    this.PORTNUMBER = 0; 
    this.CONFIGFILE = ""; 
    this.RCOMMUNITY = ""; 
    this.SNMPVERSION = 0; 
    this.RAMSIZE = 0; 
    this.FLASHSIZE = 0; 
    this.NVRAMSIZE = 0; 
    this.CABINET_ID = 0; 
    this.ROOM_ID = 0; 
    this.IOSVERSION_ID = 0; 
    this.DESCRIPTION = ""; 
    this.USERNAME = ""; 
    this.PASSWD = ""; 
    this.ENPASSWD = ""; 
    this.MANUFACTORY_ID = 0; 
    this.CFGSAVETYPE = 0; 
    this.DEVICETYPE = ""; 
    this.SENDSMS = 0; 
    this.ISSNMP = 0; 
    this.SLOTNUM = 0; 
    this.ISPING = 0; 
    this.IFNUM = 0; 
    this.APPLICATION_ID = 0; 
};

exports.CShfeFtdcRtnNetDeviceField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.MonitorType_ID = 0; 
    this.SysNetSubAreaID = 0; 
    this.CATEGORY_ID = 0; 
    this.FuctionArea = ""; 
    this.IPADDR = ""; 
    this.IPDECODE = 0; 
    this.NAME = ""; 
    this.PORTNUMBER = 0; 
    this.CONFIGFILE = ""; 
    this.RCOMMUNITY = ""; 
    this.SNMPVERSION = 0; 
    this.RAMSIZE = 0; 
    this.FLASHSIZE = 0; 
    this.NVRAMSIZE = 0; 
    this.CABINET_ID = 0; 
    this.ROOM_ID = 0; 
    this.IOSVERSION_ID = 0; 
    this.DESCRIPTION = ""; 
    this.USERNAME = ""; 
    this.PASSWD = ""; 
    this.ENPASSWD = ""; 
    this.MANUFACTORY_ID = 0; 
    this.CFGSAVETYPE = 0; 
    this.DEVICETYPE = ""; 
    this.SENDSMS = 0; 
    this.ISSNMP = 0; 
    this.SLOTNUM = 0; 
    this.ISPING = 0; 
    this.IFNUM = 0; 
    this.APPLICATION_ID = 0; 
};

exports.CShfeFtdcRspQryNetDeviceDetectField = function ()
{
    this.SysNetAreaID = 0; 
    this.SysNetSubAreaID = 0; 
    this.IP = ""; 
    this.Mask = ""; 
};

exports.CShfeFtdcReqQryNetBuildingField = function ()
{
    this.ID = 0; 
};

exports.CShfeFtdcRspQryNetBuildingField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRtnNetBuildingField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcReqQryNetRoomField = function ()
{
    this.ID = 0; 
    this.SysNetBuildingID = 0; 
};

exports.CShfeFtdcRspQryNetRoomField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SysNetBuildingID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRtnNetRoomField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SysNetBuildingID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcReqQryNetCabinetsField = function ()
{
    this.ID = 0; 
    this.SysNetRoomID = 0; 
    this.SysNetBuildingID = 0; 
};

exports.CShfeFtdcRspQryNetCabinetsField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SysNetRoomID = 0; 
    this.SysNetBuildingID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.CabinetsType = ""; 
};

exports.CShfeFtdcRtnNetCabinetsField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SysNetRoomID = 0; 
    this.SysNetBuildingID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.CabinetsType = ""; 
};

exports.CShfeFtdcReqQryNetOIDField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.Manufactory = ""; 
    this.DeviceType = ""; 
    this.CName = ""; 
    this.EName = ""; 
    this.OID = ""; 
    this.Unit = ""; 
    this.isTheTable = 0; 
};

exports.CShfeFtdcRspQryNetOIDField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.Manufactory = ""; 
    this.DeviceType = ""; 
    this.CName = ""; 
    this.EName = ""; 
    this.OID = ""; 
    this.Unit = ""; 
    this.isTheTable = 0; 
};

exports.CShfeFtdcRtnNetOIDField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.Manufactory = ""; 
    this.DeviceType = ""; 
    this.CName = ""; 
    this.EName = ""; 
    this.OID = ""; 
    this.Unit = ""; 
    this.isTheTable = 0; 
};

exports.CShfeFtdcReqQryNetTimePolicyField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.PolicyType = 0; 
    this.PolicyString = ""; 
    this.TradingDay = 0; 
    this.Description = ""; 
    this.Operation = 0; 
};

exports.CShfeFtdcRspQryNetTimePolicyField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.PolicyType = 0; 
    this.PolicyString = ""; 
    this.TradingDay = 0; 
    this.Description = ""; 
    this.Operation = 0; 
};

exports.CShfeFtdcRtnNetTimePolicyField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.PolicyType = 0; 
    this.PolicyString = ""; 
    this.TradingDay = 0; 
    this.Description = ""; 
    this.Operation = 0; 
};

exports.CShfeFtdcReqQryNetGatherTaskField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.PolicyTypeID = 0; 
    this.DataType = 0; 
    this.TypeFlag = 0; 
};

exports.CShfeFtdcRspQryNetGatherTaskField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.PolicyTypeID = 0; 
    this.DataType = 0; 
    this.TypeFlag = 0; 
};

exports.CShfeFtdcRtnNetGatherTaskField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.PolicyTypeID = 0; 
    this.DataType = 0; 
    this.TypeFlag = 0; 
};

exports.CShfeFtdcReqQryNetDeviceChgField = function ()
{
    this.DeviceID = 0; 
    this.SysNetSubAreaID = 0; 
    this.OldObjectID = ""; 
    this.NewObjectID = ""; 
};

exports.CShfeFtdcRspQryNetDeviceChgField = function ()
{
    this.DeviceID = 0; 
    this.SysNetSubAreaID = 0; 
    this.OldObjectID = ""; 
    this.NewObjectID = ""; 
};

exports.CShfeFtdcRtnNetDeviceChgField = function ()
{
    this.DeviceID = 0; 
    this.SysNetSubAreaID = 0; 
    this.OldObjectID = ""; 
    this.NewObjectID = ""; 
};

exports.CShfeFtdcReqQryNetDeviceTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.Manufactory = ""; 
    this.DeviceType = ""; 
};

exports.CShfeFtdcRspQryNetDeviceTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.Manufactory = ""; 
    this.DeviceType = ""; 
};

exports.CShfeFtdcRtnNetDeviceTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.Manufactory = ""; 
    this.DeviceType = ""; 
};

exports.CShfeFtdcReqQryNetDeviceCategoryField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRspQryNetDeviceCategoryField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRtnNetDeviceCategoryField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcReqQryNetManufactoryField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRspQryNetManufactoryField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRtnNetManufactoryField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcReqQryNetCommunityField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.IPADDR = ""; 
    this.COMMUNITY = ""; 
};

exports.CShfeFtdcRspQryNetCommunityField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.IPADDR = ""; 
    this.COMMUNITY = ""; 
};

exports.CShfeFtdcRtnNetCommunityField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.IPADDR = ""; 
    this.COMMUNITY = ""; 
};

exports.CShfeFtdcReqQryNetPortTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.Description = ""; 
};

exports.CShfeFtdcRspQryNetPortTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.Description = ""; 
};

exports.CShfeFtdcRtnNetPortTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.Description = ""; 
};

exports.CShfeFtdcReqQryNetPartAccessSpotField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRspQryNetPartAccessSpotField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRtnNetPartAccessSpotField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcReqQryNetInterfaceField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.MonitorType_ID = 0; 
    this.IfType = 0; 
    this.EName = ""; 
    this.IpAddress = ""; 
    this.IpMask = ""; 
    this.IfStatus = 0; 
    this.MAC = ""; 
    this.DeviceID = 0; 
    this.DeviceObjectID = ""; 
    this.DeviceIndex = ""; 
    this.isPolling = 0; 
    this.Description = ""; 
};

exports.CShfeFtdcRspQryNetInterfaceField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.MonitorType_ID = 0; 
    this.IfType = 0; 
    this.EName = ""; 
    this.IpAddress = ""; 
    this.IpMask = ""; 
    this.IfStatus = 0; 
    this.MAC = ""; 
    this.DeviceID = 0; 
    this.DeviceObjectID = ""; 
    this.DeviceIndex = ""; 
    this.isPolling = 0; 
    this.Description = ""; 
};

exports.CShfeFtdcRtnNetInterfaceField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.MonitorType_ID = 0; 
    this.IfType = 0; 
    this.EName = ""; 
    this.IpAddress = ""; 
    this.IpMask = ""; 
    this.IfStatus = 0; 
    this.MAC = ""; 
    this.DeviceID = 0; 
    this.DeviceObjectID = ""; 
    this.DeviceIndex = ""; 
    this.isPolling = 0; 
    this.Description = ""; 
};

exports.CShfeFtdcReqQryNetGeneralOIDField = function ()
{
    this.ID = 0; 
};

exports.CShfeFtdcRspQryNetGeneralOIDField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.OID = ""; 
    this.Unit = ""; 
    this.isTheTable = 0; 
};

exports.CShfeFtdcRtnNetGeneralOIDField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.OID = ""; 
    this.Unit = ""; 
    this.isTheTable = 0; 
};

exports.CShfeFtdcReqQryNetMonitorTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRspQryNetMonitorTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRtnNetMonitorTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcReqQryNetMonitorAttrScopeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.Comments = ""; 
};

exports.CShfeFtdcRspQryNetMonitorAttrScopeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.Comments = ""; 
};

exports.CShfeFtdcRtnNetMonitorAttrScopeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.Comments = ""; 
};

exports.CShfeFtdcReqQryNetMonitorAttrTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.MANUFACTORY_ID = 0; 
    this.MonitorType_ID = 0; 
    this.AttrType_ID = 0; 
    this.MANUFACTORY = ""; 
    this.MonitorType = ""; 
    this.AttrType = ""; 
};

exports.CShfeFtdcRspQryNetMonitorAttrTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.MANUFACTORY_ID = 0; 
    this.MonitorType_ID = 0; 
    this.AttrType_ID = 0; 
    this.MANUFACTORY = ""; 
    this.MonitorType = ""; 
    this.AttrType = ""; 
};

exports.CShfeFtdcRtnNetMonitorAttrTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.MANUFACTORY_ID = 0; 
    this.MonitorType_ID = 0; 
    this.AttrType_ID = 0; 
    this.MANUFACTORY = ""; 
    this.MonitorType = ""; 
    this.AttrType = ""; 
};

exports.CShfeFtdcReqQryNetMonitorObjectAttrField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.PolicyTypeID = 0; 
};

exports.CShfeFtdcRspQryNetMonitorObjectAttrField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.PolicyTypeID = 0; 
};

exports.CShfeFtdcRtnNetMonitorObjectAttrField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.PolicyTypeID = 0; 
};

exports.CShfeFtdcReqQryNetFuncAreaField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SysNetSubAreaID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRspQryNetFuncAreaField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SysNetSubAreaID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRtnNetFuncAreaField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SysNetSubAreaID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcReqQryNetMonitorCommandTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.Manufactory_ID = 0; 
    this.MonitorType_ID = 0; 
    this.DeviceModle_ID = 0; 
    this.ActionGroup_ID = 0; 
    this.Manufactory = ""; 
    this.MonitorType = ""; 
    this.DeviceModle = ""; 
    this.ActionGroup = ""; 
    this.Command = ""; 
};

exports.CShfeFtdcRspQryNetMonitorCommandTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.Manufactory_ID = 0; 
    this.MonitorType_ID = 0; 
    this.DeviceModle_ID = 0; 
    this.ActionGroup_ID = 0; 
    this.Manufactory = ""; 
    this.MonitorType = ""; 
    this.DeviceModle = ""; 
    this.ActionGroup = ""; 
    this.Command = ""; 
};

exports.CShfeFtdcRtnNetMonitorCommandTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.Manufactory_ID = 0; 
    this.MonitorType_ID = 0; 
    this.DeviceModle_ID = 0; 
    this.ActionGroup_ID = 0; 
    this.Manufactory = ""; 
    this.MonitorType = ""; 
    this.DeviceModle = ""; 
    this.ActionGroup = ""; 
    this.Command = ""; 
};

exports.CShfeFtdcReqQryNetMonitorActionGroupField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.ActionType = 0; 
    this.Comments = ""; 
};

exports.CShfeFtdcRspQryNetMonitorActionGroupField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.ActionType = 0; 
    this.Comments = ""; 
};

exports.CShfeFtdcRtnNetMonitorActionGroupField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.ActionType = 0; 
    this.Comments = ""; 
};

exports.CShfeFtdcReqQryNetMonitorDeviceGroupField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.Condition = ""; 
    this.Comments = ""; 
};

exports.CShfeFtdcRspQryNetMonitorDeviceGroupField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.Condition = ""; 
    this.Comments = ""; 
};

exports.CShfeFtdcRtnNetMonitorDeviceGroupField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.Condition = ""; 
    this.Comments = ""; 
};

exports.CShfeFtdcReqQryNetMonitorTaskInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.DeviceGroup_ID = 0; 
    this.ManagerGroup_ID = 0; 
    this.TimePolicy_ID = 0; 
    this.TaskPriority_ID = 0; 
    this.OutputPolicy_ID = 0; 
    this.ActionGroup_ID = 0; 
    this.EventExprStr = ""; 
    this.DeviceGroup = ""; 
    this.ManagerGroup = ""; 
    this.TimePolicy = ""; 
    this.TaskPriority = ""; 
    this.OutputPolicy = ""; 
    this.ActionGroup = ""; 
    this.ValidFlag = 0; 
    this.TaskStatus = 0; 
    this.Comments = ""; 
};

exports.CShfeFtdcRspQryNetMonitorTaskInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.DeviceGroup_ID = 0; 
    this.ManagerGroup_ID = 0; 
    this.TimePolicy_ID = 0; 
    this.TaskPriority_ID = 0; 
    this.OutputPolicy_ID = 0; 
    this.ActionGroup_ID = 0; 
    this.EventExprStr = ""; 
    this.DeviceGroup = ""; 
    this.ManagerGroup = ""; 
    this.TimePolicy = ""; 
    this.TaskPriority = ""; 
    this.OutputPolicy = ""; 
    this.ActionGroup = ""; 
    this.ValidFlag = 0; 
    this.TaskStatus = 0; 
    this.Comments = ""; 
};

exports.CShfeFtdcRtnNetMonitorTaskInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.DeviceGroup_ID = 0; 
    this.ManagerGroup_ID = 0; 
    this.TimePolicy_ID = 0; 
    this.TaskPriority_ID = 0; 
    this.OutputPolicy_ID = 0; 
    this.ActionGroup_ID = 0; 
    this.EventExprStr = ""; 
    this.DeviceGroup = ""; 
    this.ManagerGroup = ""; 
    this.TimePolicy = ""; 
    this.TaskPriority = ""; 
    this.OutputPolicy = ""; 
    this.ActionGroup = ""; 
    this.ValidFlag = 0; 
    this.TaskStatus = 0; 
    this.Comments = ""; 
};

exports.CShfeFtdcReqQryNetMonitorTaskResultField = function ()
{
    this.OperationType = 0; 
    this.ObjectID = ""; 
    this.Task_ID = 0; 
    this.OperateTime = 0; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.InstructChain = ""; 
    this.ResultChain = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcRspQryNetMonitorTaskResultField = function ()
{
    this.OperationType = 0; 
    this.ObjectID = ""; 
    this.Task_ID = 0; 
    this.OperateTime = 0; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.InstructChain = ""; 
    this.ResultChain = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcRtnNetMonitorTaskResultField = function ()
{
    this.OperationType = 0; 
    this.ObjectID = ""; 
    this.Task_ID = 0; 
    this.OperateTime = 0; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.InstructChain = ""; 
    this.ResultChain = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcReqQryNetMonitorTaskObjectSetField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.DeviceGroup_ID = 0; 
    this.Device_ID = 0; 
    this.DataCenter = 0; 
};

exports.CShfeFtdcRspQryNetMonitorTaskObjectSetField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.DeviceGroup_ID = 0; 
    this.Device_ID = 0; 
    this.DataCenter = 0; 
};

exports.CShfeFtdcRtnNetMonitorTaskObjectSetField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.DeviceGroup_ID = 0; 
    this.Device_ID = 0; 
    this.DataCenter = 0; 
};

exports.CShfeFtdcReqQryNetPartyLinkInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.MEMBER_NO = ""; 
    this.MEMBER_NAME = ""; 
    this.REMOTE_ADDR = ""; 
    this.LOCAL_ADDR = ""; 
    this.ADDRESS = ""; 
    this.LINE_STATUS = ""; 
    this.CONTACT = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.EMAIL = ""; 
    this.FAX = ""; 
    this.PROVINCE = ""; 
    this.DDN_NO = ""; 
    this.IN_MODE = ""; 
    this.IP_WAN = ""; 
    this.IP_LAN = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.INTERFACE_DATE = ""; 
    this.SOFTWARE = ""; 
    this.FEE_TYPE = ""; 
    this.SERVICEPROVIDER = ""; 
    this.IF_ZIYING = ""; 
    this.IF_TUOGUAN = ""; 
    this.HASOTHER = ""; 
    this.SEAT_NO = ""; 
    this.PRO = ""; 
};

exports.CShfeFtdcRspQryNetPartyLinkInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.MEMBER_NO = ""; 
    this.MEMBER_NAME = ""; 
    this.REMOTE_ADDR = ""; 
    this.LOCAL_ADDR = ""; 
    this.ADDRESS = ""; 
    this.LINE_STATUS = ""; 
    this.CONTACT = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.EMAIL = ""; 
    this.FAX = ""; 
    this.PROVINCE = ""; 
    this.DDN_NO = ""; 
    this.IN_MODE = ""; 
    this.IP_WAN = ""; 
    this.IP_LAN = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.INTERFACE_DATE = ""; 
    this.SOFTWARE = ""; 
    this.FEE_TYPE = ""; 
    this.SERVICEPROVIDER = ""; 
    this.IF_ZIYING = ""; 
    this.IF_TUOGUAN = ""; 
    this.HASOTHER = ""; 
    this.SEAT_NO = ""; 
    this.PRO = ""; 
};

exports.CShfeFtdcRtnNetPartyLinkInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.MEMBER_NO = ""; 
    this.MEMBER_NAME = ""; 
    this.REMOTE_ADDR = ""; 
    this.LOCAL_ADDR = ""; 
    this.ADDRESS = ""; 
    this.LINE_STATUS = ""; 
    this.CONTACT = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.EMAIL = ""; 
    this.FAX = ""; 
    this.PROVINCE = ""; 
    this.DDN_NO = ""; 
    this.IN_MODE = ""; 
    this.IP_WAN = ""; 
    this.IP_LAN = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.INTERFACE_DATE = ""; 
    this.SOFTWARE = ""; 
    this.FEE_TYPE = ""; 
    this.SERVICEPROVIDER = ""; 
    this.IF_ZIYING = ""; 
    this.IF_TUOGUAN = ""; 
    this.HASOTHER = ""; 
    this.SEAT_NO = ""; 
    this.PRO = ""; 
};

exports.CShfeFtdcReqQryNetMonitorActionAttrField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ActionGroup_ID = 0; 
    this.MonitorAttr_ID = 0; 
    this.MonitorAttrName = ""; 
};

exports.CShfeFtdcRspQryNetMonitorActionAttrField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ActionGroup_ID = 0; 
    this.MonitorAttr_ID = 0; 
    this.MonitorAttrName = ""; 
};

exports.CShfeFtdcRtnNetMonitorActionAttrField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ActionGroup_ID = 0; 
    this.MonitorAttr_ID = 0; 
    this.MonitorAttrName = ""; 
};

exports.CShfeFtdcReqQryNetModuleField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.MonitorType_ID = 0; 
    this.DeviceID = 0; 
    this.DeviceObjectID = ""; 
    this.Name = ""; 
    this.Description = ""; 
    this.ModuleIndex = 0; 
    this.EntPhyIndex = 0; 
};

exports.CShfeFtdcRspQryNetModuleField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.MonitorType_ID = 0; 
    this.DeviceID = 0; 
    this.DeviceObjectID = ""; 
    this.Name = ""; 
    this.Description = ""; 
    this.ModuleIndex = 0; 
    this.EntPhyIndex = 0; 
};

exports.CShfeFtdcRtnNetModuleField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.MonitorType_ID = 0; 
    this.DeviceID = 0; 
    this.DeviceObjectID = ""; 
    this.Name = ""; 
    this.Description = ""; 
    this.ModuleIndex = 0; 
    this.EntPhyIndex = 0; 
};

exports.CShfeFtdcReqQryNetEventExprField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CNAME = ""; 
    this.ENAME = ""; 
    this.WarningLEVEL = ""; 
    this.EventTypeID = 0; 
    this.SubEventTypeID = 0; 
    this.GIVEUPTIME = 0; 
    this.CONTROL = ""; 
    this.EXPR = ""; 
    this.BRIEF = ""; 
    this.DISCRIPTION = ""; 
    this.MSGGROUP_ID = 0; 
    this.ADMINGROUP_ID = 0; 
};

exports.CShfeFtdcRspQryNetEventExprField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CNAME = ""; 
    this.ENAME = ""; 
    this.WarningLEVEL = ""; 
    this.EventTypeID = 0; 
    this.SubEventTypeID = 0; 
    this.GIVEUPTIME = 0; 
    this.CONTROL = ""; 
    this.EXPR = ""; 
    this.BRIEF = ""; 
    this.DISCRIPTION = ""; 
    this.MSGGROUP_ID = 0; 
    this.ADMINGROUP_ID = 0; 
};

exports.CShfeFtdcRtnNetEventExprField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CNAME = ""; 
    this.ENAME = ""; 
    this.WarningLEVEL = ""; 
    this.EventTypeID = 0; 
    this.SubEventTypeID = 0; 
    this.GIVEUPTIME = 0; 
    this.CONTROL = ""; 
    this.EXPR = ""; 
    this.BRIEF = ""; 
    this.DISCRIPTION = ""; 
    this.MSGGROUP_ID = 0; 
    this.ADMINGROUP_ID = 0; 
};

exports.CShfeFtdcReqQryNetEventTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRspQryNetEventTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRtnNetEventTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcReqQryNetSubEventTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRspQryNetSubEventTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcRtnNetSubEventTypeField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcReqQryNetEventLevelField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.DISCRIPTION = ""; 
};

exports.CShfeFtdcRspQryNetEventLevelField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.DISCRIPTION = ""; 
};

exports.CShfeFtdcRtnNetEventLevelField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.DISCRIPTION = ""; 
};

exports.CShfeFtdcReqQryNetMonitorTaskStatusResultField = function ()
{
    this.OperationType = 0; 
    this.ObjectID = ""; 
    this.Task_ID = 0; 
    this.OperateTime = 0; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcRspQryNetMonitorTaskStatusResultField = function ()
{
    this.OperationType = 0; 
    this.ObjectID = ""; 
    this.Task_ID = 0; 
    this.OperateTime = 0; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcRtnNetMonitorTaskStatusResultField = function ()
{
    this.OperationType = 0; 
    this.ObjectID = ""; 
    this.Task_ID = 0; 
    this.OperateTime = 0; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcReqConfigLoginField = function ()
{
    this.DataCenter = 0; 
    this.ID = 0; 
    this.HasConfig = 0; 
    this.Authorization = ""; 
};

exports.CShfeFtdcRspQryConfigLoginField = function ()
{
    this.ErrorID = 0; 
    this.ErrorMsg = ""; 
};

exports.CShfeFtdcRspServerTypeField = function ()
{
    this.IsMaster = 0; 
};

exports.CShfeFtdcReqSysServerExitField = function ()
{
    this.Time = ""; 
    this.Authorization = ""; 
};

exports.CShfeFtdcReqQryNetCfgFileField = function ()
{
    this.OperationType = 0; 
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.CfgFileName = ""; 
};

exports.CShfeFtdcRspQryNetCfgFileField = function ()
{
    this.OperationType = 0; 
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.CfgFileName = ""; 
};

exports.CShfeFtdcRtnNetCfgFileField = function ()
{
    this.OperationType = 0; 
    this.ObjectID = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.CfgFileName = ""; 
};

exports.CShfeFtdcReqQryNetMonitorDeviceTaskField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.IPAddress = ""; 
    this.Manufactory_ID = 0; 
    this.InstructChain = ""; 
    this.InstructAlias = ""; 
    this.InstructArgs = ""; 
    this.DefParamChain = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcRspQryNetMonitorDeviceTaskField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.IPAddress = ""; 
    this.Manufactory_ID = 0; 
    this.InstructChain = ""; 
    this.InstructAlias = ""; 
    this.InstructArgs = ""; 
    this.DefParamChain = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcRtnNetMonitorDeviceTaskField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ObjectID = ""; 
    this.IPAddress = ""; 
    this.Manufactory_ID = 0; 
    this.InstructChain = ""; 
    this.InstructAlias = ""; 
    this.InstructArgs = ""; 
    this.DefParamChain = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcReqQryNetMonitorTaskInstAttrsField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.Manufactory_ID = 0; 
    this.InstructAlias = ""; 
    this.DEVICETYPE = ""; 
    this.AttrsChain = ""; 
    this.DefRegularChain = ""; 
    this.DefParamChain = ""; 
};

exports.CShfeFtdcRspQryNetMonitorTaskInstAttrsField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.Manufactory_ID = 0; 
    this.InstructAlias = ""; 
    this.DEVICETYPE = ""; 
    this.AttrsChain = ""; 
    this.DefRegularChain = ""; 
    this.DefParamChain = ""; 
};

exports.CShfeFtdcRtnNetMonitorTaskInstAttrsField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.Manufactory_ID = 0; 
    this.InstructAlias = ""; 
    this.DEVICETYPE = ""; 
    this.AttrsChain = ""; 
    this.DefRegularChain = ""; 
    this.DefParamChain = ""; 
};

exports.CShfeFtdcReqQryFileGeneralOperField = function ()
{
    this.OperationType = 0; 
    this.FileName = ""; 
    this.Version = ""; 
    this.SubVersion = 0; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.UserName = ""; 
    this.OperType = 0; 
    this.OperResult = 0; 
    this.Comments = ""; 
    this.Offset = 0; 
    this.Length = 0; 
    this.FileContent = ""; 
};

exports.CShfeFtdcRspQryFileGeneralOperField = function ()
{
    this.OperationType = 0; 
    this.FileName = ""; 
    this.Version = ""; 
    this.SubVersion = 0; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.UserName = ""; 
    this.OperType = 0; 
    this.OperResult = 0; 
    this.Comments = ""; 
    this.Offset = 0; 
    this.Length = 0; 
    this.FileContent = ""; 
};

exports.CShfeFtdcRtnFileGeneralOperField = function ()
{
    this.OperationType = 0; 
    this.FileName = ""; 
    this.Version = ""; 
    this.SubVersion = 0; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.UserName = ""; 
    this.OperType = 0; 
    this.OperResult = 0; 
    this.Comments = ""; 
    this.Offset = 0; 
    this.Length = 0; 
    this.FileContent = ""; 
};

exports.CShfeFtdcReqQryNetBaseLineField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.MANUFACTORY_ID = 0; 
    this.Name = ""; 
    this.SerialUsed = ""; 
    this.data = ""; 
    this.memo = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcRspQryNetBaseLineField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.MANUFACTORY_ID = 0; 
    this.Name = ""; 
    this.SerialUsed = ""; 
    this.data = ""; 
    this.memo = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcRtnNetBaseLineField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.MANUFACTORY_ID = 0; 
    this.Name = ""; 
    this.SerialUsed = ""; 
    this.data = ""; 
    this.memo = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcReqQryNetBaseLineTaskField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.Name = ""; 
    this.BaseLineIDList = ""; 
    this.DeviceIDList = ""; 
    this.GenDate = ""; 
    this.GenTime = ""; 
    this.GenUser = ""; 
    this.memo = ""; 
};

exports.CShfeFtdcRspQryNetBaseLineTaskField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.Name = ""; 
    this.BaseLineIDList = ""; 
    this.DeviceIDList = ""; 
    this.GenDate = ""; 
    this.GenTime = ""; 
    this.GenUser = ""; 
    this.memo = ""; 
};

exports.CShfeFtdcRtnNetBaseLineTaskField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.Name = ""; 
    this.BaseLineIDList = ""; 
    this.DeviceIDList = ""; 
    this.GenDate = ""; 
    this.GenTime = ""; 
    this.GenUser = ""; 
    this.memo = ""; 
};

exports.CShfeFtdcReqQryNetBaseLineResultField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.BaseLineName = ""; 
    this.DeviceObjID = ""; 
    this.DeviceIP = ""; 
    this.Result = ""; 
    this.GenDate = ""; 
    this.GenTime = ""; 
    this.GenUser = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcRspQryNetBaseLineResultField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.BaseLineName = ""; 
    this.DeviceObjID = ""; 
    this.DeviceIP = ""; 
    this.Result = ""; 
    this.GenDate = ""; 
    this.GenTime = ""; 
    this.GenUser = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcRtnNetBaseLineResultField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.BaseLineName = ""; 
    this.DeviceObjID = ""; 
    this.DeviceIP = ""; 
    this.Result = ""; 
    this.GenDate = ""; 
    this.GenTime = ""; 
    this.GenUser = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcReqQryNetPartyLinkStatusInfoField = function ()
{
    this.OperationType = 0; 
    this.KeyCompare = 0; 
    this.KeyName = ""; 
    this.KeyValue = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.SEAT_NO = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.status = ""; 
};

exports.CShfeFtdcRspQryNetPartyLinkStatusInfoField = function ()
{
    this.OperationType = 0; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.SEAT_NO = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.status = ""; 
};

exports.CShfeFtdcRtnNetPartyLinkStatusInfoField = function ()
{
    this.OperationType = 0; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.SEAT_NO = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.status = ""; 
};

exports.CShfeFtdcReqQryNetMemberSDHLineInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SeqNo = 0; 
    this.MemContractNo = ""; 
    this.ApplyPerson = ""; 
    this.MonthlyRental = 0; 
    this.MemberNo = ""; 
    this.ParticipantName = ""; 
    this.ClientManager = ""; 
    this.Bandwidth = ""; 
    this.InterfaceType = ""; 
    this.RemoteCircuit = ""; 
    this.LocalCircuit = ""; 
    this.Remark = ""; 
    this.EndALineAddress = ""; 
    this.EndAContact = ""; 
    this.EndZLineAddress = ""; 
    this.ContactName = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.PROVINCE = ""; 
    this.StartPortID = ""; 
    this.StartJump = ""; 
    this.LINE_STATUS = ""; 
    this.DataCenterID = 0; 
};

exports.CShfeFtdcRspQryNetMemberSDHLineInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SeqNo = 0; 
    this.MemContractNo = ""; 
    this.ApplyPerson = ""; 
    this.MonthlyRental = 0; 
    this.MemberNo = ""; 
    this.ParticipantName = ""; 
    this.ClientManager = ""; 
    this.Bandwidth = ""; 
    this.InterfaceType = ""; 
    this.RemoteCircuit = ""; 
    this.LocalCircuit = ""; 
    this.Remark = ""; 
    this.EndALineAddress = ""; 
    this.EndAContact = ""; 
    this.EndZLineAddress = ""; 
    this.ContactName = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.PROVINCE = ""; 
    this.StartPortID = ""; 
    this.StartJump = ""; 
    this.LINE_STATUS = ""; 
    this.DataCenterID = 0; 
};

exports.CShfeFtdcRtnNetMemberSDHLineInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SeqNo = 0; 
    this.MemContractNo = ""; 
    this.ApplyPerson = ""; 
    this.MonthlyRental = 0; 
    this.MemberNo = ""; 
    this.ParticipantName = ""; 
    this.ClientManager = ""; 
    this.Bandwidth = ""; 
    this.InterfaceType = ""; 
    this.RemoteCircuit = ""; 
    this.LocalCircuit = ""; 
    this.Remark = ""; 
    this.EndALineAddress = ""; 
    this.EndAContact = ""; 
    this.EndZLineAddress = ""; 
    this.ContactName = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.PROVINCE = ""; 
    this.StartPortID = ""; 
    this.StartJump = ""; 
    this.LINE_STATUS = ""; 
    this.DataCenterID = 0; 
};

exports.CShfeFtdcReqQryNetDDNLinkInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ClientName = ""; 
    this.DDN_NO = ""; 
    this.BusinessUnit = ""; 
    this.Bandwidth = ""; 
    this.EndAAddress = ""; 
    this.EndAContactName = ""; 
    this.EndZAddress = ""; 
    this.EndZContactName = ""; 
};

exports.CShfeFtdcRspQryNetDDNLinkInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ClientName = ""; 
    this.DDN_NO = ""; 
    this.BusinessUnit = ""; 
    this.Bandwidth = ""; 
    this.EndAAddress = ""; 
    this.EndAContactName = ""; 
    this.EndZAddress = ""; 
    this.EndZContactName = ""; 
};

exports.CShfeFtdcRtnNetDDNLinkInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ClientName = ""; 
    this.DDN_NO = ""; 
    this.BusinessUnit = ""; 
    this.Bandwidth = ""; 
    this.EndAAddress = ""; 
    this.EndAContactName = ""; 
    this.EndZAddress = ""; 
    this.EndZContactName = ""; 
};

exports.CShfeFtdcReqQryNetPseudMemberLinkInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SeqNo = 0; 
    this.MemContractNo = ""; 
    this.LineUsage = ""; 
    this.LocalCircuit = ""; 
    this.RemoteCircuit = ""; 
    this.BusinessUnit = ""; 
    this.Bandwidth = ""; 
    this.ApplyPerson = ""; 
    this.MonthlyRental = 0; 
    this.EndAAddress = ""; 
    this.EndAContactName = ""; 
    this.EndZAddress = ""; 
    this.EndZContactName = ""; 
    this.Telephone = ""; 
    this.LineInfo = ""; 
    this.IPADDR = ""; 
};

exports.CShfeFtdcRspQryNetPseudMemberLinkInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SeqNo = 0; 
    this.MemContractNo = ""; 
    this.LineUsage = ""; 
    this.LocalCircuit = ""; 
    this.RemoteCircuit = ""; 
    this.BusinessUnit = ""; 
    this.Bandwidth = ""; 
    this.ApplyPerson = ""; 
    this.MonthlyRental = 0; 
    this.EndAAddress = ""; 
    this.EndAContactName = ""; 
    this.EndZAddress = ""; 
    this.EndZContactName = ""; 
    this.Telephone = ""; 
    this.LineInfo = ""; 
    this.IPADDR = ""; 
};

exports.CShfeFtdcRtnNetPseudMemberLinkInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SeqNo = 0; 
    this.MemContractNo = ""; 
    this.LineUsage = ""; 
    this.LocalCircuit = ""; 
    this.RemoteCircuit = ""; 
    this.BusinessUnit = ""; 
    this.Bandwidth = ""; 
    this.ApplyPerson = ""; 
    this.MonthlyRental = 0; 
    this.EndAAddress = ""; 
    this.EndAContactName = ""; 
    this.EndZAddress = ""; 
    this.EndZContactName = ""; 
    this.Telephone = ""; 
    this.LineInfo = ""; 
    this.IPADDR = ""; 
};

exports.CShfeFtdcReqQryOuterDeviceInfField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.IPADDR = ""; 
    this.NAME = ""; 
    this.memo = ""; 
};

exports.CShfeFtdcRspQryOuterDeviceInfField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.IPADDR = ""; 
    this.NAME = ""; 
    this.memo = ""; 
};

exports.CShfeFtdcRtnNetOuterDeviceInfField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.IPADDR = ""; 
    this.NAME = ""; 
    this.memo = ""; 
};

exports.CShfeFtdcReqQryNetLocalPingResultInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SouIPADDR = ""; 
    this.SouNAME = ""; 
    this.TarIPADDR = ""; 
    this.TarNAME = ""; 
    this.PDateSta = ""; 
    this.PTimeSta = ""; 
    this.ConnRate = 0; 
};

exports.CShfeFtdcRspQryNetLocalPingResultInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SouIPADDR = ""; 
    this.SouNAME = ""; 
    this.TarIPADDR = ""; 
    this.TarNAME = ""; 
    this.PDateSta = ""; 
    this.PTimeSta = ""; 
    this.ConnRate = 0; 
};

exports.CShfeFtdcRtnNetLocalPingResultInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SouIPADDR = ""; 
    this.SouNAME = ""; 
    this.TarIPADDR = ""; 
    this.TarNAME = ""; 
    this.PDateSta = ""; 
    this.PTimeSta = ""; 
    this.ConnRate = 0; 
};

exports.CShfeFtdcReqQryNetRomotePingResultInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SouIPADDR = ""; 
    this.SouNAME = ""; 
    this.TarIPADDR = ""; 
    this.TarNAME = ""; 
    this.PDateSta = ""; 
    this.PTimeSta = ""; 
    this.ConnRate = 0; 
    this.TimeDlyMin = ""; 
    this.TimeDlyMax = ""; 
    this.TimeDlyAvg = ""; 
};

exports.CShfeFtdcRspQryNetRomotePingResultInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SouIPADDR = ""; 
    this.SouNAME = ""; 
    this.TarIPADDR = ""; 
    this.TarNAME = ""; 
    this.PDateSta = ""; 
    this.PTimeSta = ""; 
    this.ConnRate = 0; 
    this.TimeDlyMin = ""; 
    this.TimeDlyMax = ""; 
    this.TimeDlyAvg = ""; 
};

exports.CShfeFtdcRtnNetRomotePingResultInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.SouIPADDR = ""; 
    this.SouNAME = ""; 
    this.TarIPADDR = ""; 
    this.TarNAME = ""; 
    this.PDateSta = ""; 
    this.PTimeSta = ""; 
    this.ConnRate = 0; 
    this.TimeDlyMin = ""; 
    this.TimeDlyMax = ""; 
    this.TimeDlyAvg = ""; 
};

exports.CShfeFtdcRtnMonitorTopProcessInfoField = function ()
{
    this.HostName = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.CPU = ""; 
    this.TTY = ""; 
    this.PID = 0; 
    this.USERNAME = ""; 
    this.PRI = 0; 
    this.NI = 0; 
    this.SSIZE = 0; 
    this.RES = 0; 
    this.STATE = ""; 
    this.STIME = ""; 
    this.pWCPU = 0; 
    this.pCPU = 0; 
    this.COMMAND = ""; 
};

exports.CShfeFtdcReqQrySysInternalTopologyField = function ()
{
    this.InfoType = ""; 
    this.Node1_ID = ""; 
    this.Node1_Info = ""; 
    this.LinkInfo = ""; 
    this.LinkState = ""; 
    this.Node2_ID = ""; 
    this.Node2_Info = ""; 
};

exports.CShfeFtdcRspQrySysInternalTopologyField = function ()
{
    this.InfoType = ""; 
    this.Node1_ID = ""; 
    this.Node1_Info = ""; 
    this.LinkInfo = ""; 
    this.LinkState = ""; 
    this.Node2_ID = ""; 
    this.Node2_Info = ""; 
};

exports.CShfeFtdcRtnSysInternalTopologyField = function ()
{
    this.InfoType = ""; 
    this.Node1_ID = ""; 
    this.Node1_Info = ""; 
    this.LinkInfo = ""; 
    this.LinkState = ""; 
    this.Node2_ID = ""; 
    this.Node2_Info = ""; 
};

exports.CShfeFtdcReqQryMemberLinkCostField = function ()
{
    this.ID = 0; 
    this.ParticipantName = ""; 
    this.DDN_NO = ""; 
    this.ServiceProvider = ""; 
    this.Pay_Date = ""; 
    this.B_Pay_Date = ""; 
    this.D_Pay_Date = ""; 
    this.Charge = 0; 
    this.Fee_Type = ""; 
    this.Pro = ""; 
};

exports.CShfeFtdcRspQryMemberLinkCostField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ParticipantName = ""; 
    this.DDN_NO = ""; 
    this.ServiceProvider = ""; 
    this.Pay_Date = ""; 
    this.B_Pay_Date = ""; 
    this.D_Pay_Date = ""; 
    this.Charge = 0; 
    this.Fee_Type = ""; 
    this.Pro = ""; 
};

exports.CShfeFtdcRtnMemberLinkCostField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.ParticipantName = ""; 
    this.DDN_NO = ""; 
    this.ServiceProvider = ""; 
    this.Pay_Date = ""; 
    this.B_Pay_Date = ""; 
    this.D_Pay_Date = ""; 
    this.Charge = 0; 
    this.Fee_Type = ""; 
    this.Pro = ""; 
};

exports.CShfeFtdcReqQryNetPartylinkMonthlyRentField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.LineName = ""; 
    this.DDN_NO = ""; 
    this.ServiceProvider = ""; 
    this.MonthlyRental = 0; 
    this.Remark = ""; 
};

exports.CShfeFtdcRspQryNetPartylinkMonthlyRentField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.LineName = ""; 
    this.DDN_NO = ""; 
    this.ServiceProvider = ""; 
    this.MonthlyRental = 0; 
    this.Remark = ""; 
};

exports.CShfeFtdcRtnNetPartylinkMonthlyRentField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.LineName = ""; 
    this.DDN_NO = ""; 
    this.ServiceProvider = ""; 
    this.MonthlyRental = 0; 
    this.Remark = ""; 
};

exports.CShfeFtdcReqQryNetNonPartyLinkInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.MEMBER_NO = ""; 
    this.MEMBER_NAME = ""; 
    this.REMOTE_ADDR = ""; 
    this.LOCAL_ADDR = ""; 
    this.ADDRESS = ""; 
    this.LINE_STATUS = ""; 
    this.CONTACT = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.EMAIL = ""; 
    this.FAX = ""; 
    this.PROVINCE = ""; 
    this.DDN_NO = ""; 
    this.IN_MODE = ""; 
    this.IP_WAN = ""; 
    this.IP_LAN = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.INTERFACE_DATE = ""; 
    this.SOFTWARE = ""; 
    this.FEE_TYPE = ""; 
    this.SERVICEPROVIDER = ""; 
    this.IF_ZIYING = ""; 
    this.IF_TUOGUAN = ""; 
    this.HASOTHER = ""; 
    this.SEAT_NO = ""; 
    this.PRO = ""; 
};

exports.CShfeFtdcRspQryNetNonPartyLinkInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.MEMBER_NO = ""; 
    this.MEMBER_NAME = ""; 
    this.REMOTE_ADDR = ""; 
    this.LOCAL_ADDR = ""; 
    this.ADDRESS = ""; 
    this.LINE_STATUS = ""; 
    this.CONTACT = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.EMAIL = ""; 
    this.FAX = ""; 
    this.PROVINCE = ""; 
    this.DDN_NO = ""; 
    this.IN_MODE = ""; 
    this.IP_WAN = ""; 
    this.IP_LAN = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.INTERFACE_DATE = ""; 
    this.SOFTWARE = ""; 
    this.FEE_TYPE = ""; 
    this.SERVICEPROVIDER = ""; 
    this.IF_ZIYING = ""; 
    this.IF_TUOGUAN = ""; 
    this.HASOTHER = ""; 
    this.SEAT_NO = ""; 
    this.PRO = ""; 
};

exports.CShfeFtdcRtnNetNonPartyLinkInfoField = function ()
{
    this.OperationType = 0; 
    this.ID = 0; 
    this.MEMBER_NO = ""; 
    this.MEMBER_NAME = ""; 
    this.REMOTE_ADDR = ""; 
    this.LOCAL_ADDR = ""; 
    this.ADDRESS = ""; 
    this.LINE_STATUS = ""; 
    this.CONTACT = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.EMAIL = ""; 
    this.FAX = ""; 
    this.PROVINCE = ""; 
    this.DDN_NO = ""; 
    this.IN_MODE = ""; 
    this.IP_WAN = ""; 
    this.IP_LAN = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.INTERFACE_DATE = ""; 
    this.SOFTWARE = ""; 
    this.FEE_TYPE = ""; 
    this.SERVICEPROVIDER = ""; 
    this.IF_ZIYING = ""; 
    this.IF_TUOGUAN = ""; 
    this.HASOTHER = ""; 
    this.SEAT_NO = ""; 
    this.PRO = ""; 
};

exports.CShfeFtdcSysNetAreaField = function ()
{
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcSysNetSubAreaField = function ()
{
    this.ID = 0; 
    this.SysNetAreaID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcSysNetSubAreaIPField = function ()
{
    this.ID = 0; 
    this.SysNetSubAreaID = 0; 
    this.IP = ""; 
    this.Mask = ""; 
};

exports.CShfeFtdcSysNetDeviceTypeField = function ()
{
    this.ID = 0; 
    this.Manufactory = ""; 
    this.DeviceType = ""; 
};

exports.CShfeFtdcSysNetOIDField = function ()
{
    this.ID = 0; 
    this.Manufactory = ""; 
    this.DeviceType = ""; 
    this.CName = ""; 
    this.EName = ""; 
    this.OID = ""; 
    this.Unit = ""; 
    this.isTheTable = 0; 
};

exports.CShfeFtdcSysNetTimePolicyField = function ()
{
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.PolicyType = 0; 
    this.PolicyString = ""; 
    this.TradingDay = 0; 
    this.Description = ""; 
    this.Operation = 0; 
};

exports.CShfeFtdcSysNetGatherTaskField = function ()
{
    this.ID = 0; 
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.PolicyTypeID = 0; 
    this.DataType = 0; 
    this.TypeFlag = 0; 
};

exports.CShfeFtdcSysNetDeviceCategoryField = function ()
{
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcSysNetManufactoryField = function ()
{
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcSysNetCommunityField = function ()
{
    this.ID = 0; 
    this.IPADDR = ""; 
    this.COMMUNITY = ""; 
};

exports.CShfeFtdcSysNetGeneralOIDField = function ()
{
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.OID = ""; 
    this.Unit = ""; 
    this.isTheTable = 0; 
};

exports.CShfeFtdcSysNetDeviceLinkedField = function ()
{
    this.ID = 0; 
    this.NetDeviceID = 0; 
    this.NetPortID = 0; 
    this.NetObjectID = ""; 
    this.NetPortType = ""; 
    this.LinkNetDeviceID = 0; 
    this.LinkNetPortID = 0; 
    this.LinkNetObjectID = ""; 
    this.LinkNetPortType = ""; 
    this.LinkSource = 0; 
};

exports.CShfeFtdcSysNetDeviceField = function ()
{
    this.ID = 0; 
    this.ObjectID = ""; 
    this.MonitorType_ID = 0; 
    this.SysNetSubAreaID = 0; 
    this.CATEGORY_ID = 0; 
    this.FuctionArea = ""; 
    this.IPADDR = ""; 
    this.IPDECODE = 0; 
    this.NAME = ""; 
    this.PORTNUMBER = 0; 
    this.CONFIGFILE = ""; 
    this.RCOMMUNITY = ""; 
    this.SNMPVERSION = 0; 
    this.RAMSIZE = 0; 
    this.FLASHSIZE = 0; 
    this.NVRAMSIZE = 0; 
    this.CABINET_ID = 0; 
    this.ROOM_ID = 0; 
    this.IOSVERSION_ID = 0; 
    this.DESCRIPTION = ""; 
    this.USERNAME = ""; 
    this.PASSWD = ""; 
    this.ENPASSWD = ""; 
    this.MANUFACTORY_ID = 0; 
    this.CFGSAVETYPE = 0; 
    this.DEVICETYPE = ""; 
    this.SENDSMS = 0; 
    this.ISSNMP = 0; 
    this.SLOTNUM = 0; 
    this.ISPING = 0; 
    this.IFNUM = 0; 
    this.APPLICATION_ID = 0; 
};

exports.CShfeFtdcSysNetInterfaceField = function ()
{
    this.ID = 0; 
    this.ObjectID = ""; 
    this.MonitorType_ID = 0; 
    this.IfType = 0; 
    this.EName = ""; 
    this.IpAddress = ""; 
    this.IpMask = ""; 
    this.IfStatus = 0; 
    this.MAC = ""; 
    this.DeviceID = 0; 
    this.DeviceObjectID = ""; 
    this.DeviceIndex = ""; 
    this.isPolling = 0; 
    this.Description = ""; 
};

exports.CShfeFtdcSysNetMonitorTypeField = function ()
{
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcSysNetMonitorAttrScopeField = function ()
{
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.Comments = ""; 
};

exports.CShfeFtdcSysNetMonitorAttrTypeField = function ()
{
    this.ID = 0; 
    this.MANUFACTORY_ID = 0; 
    this.MonitorType_ID = 0; 
    this.AttrType_ID = 0; 
    this.MANUFACTORY = ""; 
    this.MonitorType = ""; 
    this.AttrType = ""; 
};

exports.CShfeFtdcSysNetMonitorObjectAttrField = function ()
{
    this.ID = 0; 
    this.ObjectID = ""; 
    this.AttrType = ""; 
    this.PolicyTypeID = 0; 
};

exports.CShfeFtdcSysNetFuncAreaField = function ()
{
    this.ID = 0; 
    this.SysNetSubAreaID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcSysNetMonitorCommandTypeField = function ()
{
    this.ID = 0; 
    this.Manufactory_ID = 0; 
    this.MonitorType_ID = 0; 
    this.DeviceModle_ID = 0; 
    this.ActionGroup_ID = 0; 
    this.Manufactory = ""; 
    this.MonitorType = ""; 
    this.DeviceModle = ""; 
    this.ActionGroup = ""; 
    this.Command = ""; 
};

exports.CShfeFtdcSysNetMonitorActionGroupField = function ()
{
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.ActionType = 0; 
    this.Comments = ""; 
};

exports.CShfeFtdcSysNetMonitorDeviceGroupField = function ()
{
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.Condition = ""; 
    this.Comments = ""; 
};

exports.CShfeFtdcSysNetMonitorTaskInfoField = function ()
{
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.DeviceGroup_ID = 0; 
    this.ManagerGroup_ID = 0; 
    this.TimePolicy_ID = 0; 
    this.TaskPriority_ID = 0; 
    this.OutputPolicy_ID = 0; 
    this.ActionGroup_ID = 0; 
    this.EventExprStr = ""; 
    this.DeviceGroup = ""; 
    this.ManagerGroup = ""; 
    this.TimePolicy = ""; 
    this.TaskPriority = ""; 
    this.OutputPolicy = ""; 
    this.ActionGroup = ""; 
    this.ValidFlag = 0; 
    this.TaskStatus = 0; 
    this.Comments = ""; 
};

exports.CShfeFtdcSysNetDeviceChgField = function ()
{
    this.DeviceID = 0; 
    this.SysNetSubAreaID = 0; 
    this.OldObjectID = ""; 
    this.NewObjectID = ""; 
};

exports.CShfeFtdcSysNetMonitorTaskResultField = function ()
{
    this.ObjectID = ""; 
    this.Task_ID = 0; 
    this.OperateTime = 0; 
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.InstructChain = ""; 
    this.ResultChain = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcSysNetMonitorTaskObjectSetField = function ()
{
    this.ID = 0; 
    this.DeviceGroup_ID = 0; 
    this.Device_ID = 0; 
    this.DataCenter = 0; 
};

exports.CShfeFtdcSysNetPartyLinkInfoField = function ()
{
    this.ID = 0; 
    this.MEMBER_NO = ""; 
    this.MEMBER_NAME = ""; 
    this.REMOTE_ADDR = ""; 
    this.LOCAL_ADDR = ""; 
    this.ADDRESS = ""; 
    this.LINE_STATUS = ""; 
    this.CONTACT = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.EMAIL = ""; 
    this.FAX = ""; 
    this.PROVINCE = ""; 
    this.DDN_NO = ""; 
    this.IN_MODE = ""; 
    this.IP_WAN = ""; 
    this.IP_LAN = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.INTERFACE_DATE = ""; 
    this.SOFTWARE = ""; 
    this.FEE_TYPE = ""; 
    this.SERVICEPROVIDER = ""; 
    this.IF_ZIYING = ""; 
    this.IF_TUOGUAN = ""; 
    this.HASOTHER = ""; 
    this.SEAT_NO = ""; 
    this.PRO = ""; 
};

exports.CShfeFtdcSysNetMonitorActionAttrField = function ()
{
    this.ID = 0; 
    this.ActionGroup_ID = 0; 
    this.MonitorAttr_ID = 0; 
    this.MonitorAttrName = ""; 
};

exports.CShfeFtdcSysNetModuleField = function ()
{
    this.ID = 0; 
    this.ObjectID = ""; 
    this.MonitorType_ID = 0; 
    this.DeviceID = 0; 
    this.DeviceObjectID = ""; 
    this.Name = ""; 
    this.Description = ""; 
    this.ModuleIndex = 0; 
    this.EntPhyIndex = 0; 
};

exports.CShfeFtdcSysNetEventExprField = function ()
{
    this.ID = 0; 
    this.CNAME = ""; 
    this.ENAME = ""; 
    this.WarningLEVEL = ""; 
    this.EventTypeID = 0; 
    this.SubEventTypeID = 0; 
    this.GIVEUPTIME = 0; 
    this.CONTROL = ""; 
    this.EXPR = ""; 
    this.BRIEF = ""; 
    this.DISCRIPTION = ""; 
    this.MSGGROUP_ID = 0; 
    this.ADMINGROUP_ID = 0; 
};

exports.CShfeFtdcSysNetEventTypeField = function ()
{
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcSysNetSubEventTypeField = function ()
{
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
};

exports.CShfeFtdcSysNetEventLevelField = function ()
{
    this.ID = 0; 
    this.CName = ""; 
    this.EName = ""; 
    this.DISCRIPTION = ""; 
};

exports.CShfeFtdcSysNetMonitorDeviceTaskField = function ()
{
    this.ID = 0; 
    this.ObjectID = ""; 
    this.IPAddress = ""; 
    this.Manufactory_ID = 0; 
    this.InstructChain = ""; 
    this.InstructAlias = ""; 
    this.InstructArgs = ""; 
    this.DefParamChain = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcSysNetMonitorTaskInstAttrsField = function ()
{
    this.ID = 0; 
    this.Manufactory_ID = 0; 
    this.InstructAlias = ""; 
    this.DEVICETYPE = ""; 
    this.AttrsChain = ""; 
    this.DefRegularChain = ""; 
    this.DefParamChain = ""; 
};

exports.CShfeFtdcSysNetBaseLineField = function ()
{
    this.ID = 0; 
    this.MANUFACTORY_ID = 0; 
    this.Name = ""; 
    this.SerialUsed = ""; 
    this.data = ""; 
    this.memo = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcSysNetBaseLineTaskField = function ()
{
    this.ID = 0; 
    this.Name = ""; 
    this.BaseLineIDList = ""; 
    this.DeviceIDList = ""; 
    this.GenDate = ""; 
    this.GenTime = ""; 
    this.GenUser = ""; 
    this.memo = ""; 
};

exports.CShfeFtdcSysNetBaseLineResultField = function ()
{
    this.ID = 0; 
    this.BaseLineName = ""; 
    this.DeviceObjID = ""; 
    this.DeviceIP = ""; 
    this.Result = ""; 
    this.GenDate = ""; 
    this.GenTime = ""; 
    this.GenUser = ""; 
    this.Flag = 0; 
};

exports.CShfeFtdcSysNetPartyLinkStatusInfoField = function ()
{
    this.MonDate = ""; 
    this.MonTime = ""; 
    this.SEAT_NO = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.status = ""; 
};

exports.CShfeFtdcSysNetMemberSDHLineInfoField = function ()
{
    this.ID = 0; 
    this.SeqNo = 0; 
    this.MemContractNo = ""; 
    this.ApplyPerson = ""; 
    this.MonthlyRental = 0; 
    this.MemberNo = ""; 
    this.ParticipantName = ""; 
    this.ClientManager = ""; 
    this.Bandwidth = ""; 
    this.InterfaceType = ""; 
    this.RemoteCircuit = ""; 
    this.LocalCircuit = ""; 
    this.Remark = ""; 
    this.EndALineAddress = ""; 
    this.EndAContact = ""; 
    this.EndZLineAddress = ""; 
    this.ContactName = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.PROVINCE = ""; 
    this.StartPortID = ""; 
    this.StartJump = ""; 
    this.LINE_STATUS = ""; 
    this.DataCenterID = 0; 
};

exports.CShfeFtdcSysNetDDNLinkInfoField = function ()
{
    this.ID = 0; 
    this.ClientName = ""; 
    this.DDN_NO = ""; 
    this.BusinessUnit = ""; 
    this.Bandwidth = ""; 
    this.EndAAddress = ""; 
    this.EndAContactName = ""; 
    this.EndZAddress = ""; 
    this.EndZContactName = ""; 
};

exports.CShfeFtdcSysNetPseudMemberLinkInfoField = function ()
{
    this.ID = 0; 
    this.SeqNo = 0; 
    this.MemContractNo = ""; 
    this.LineUsage = ""; 
    this.LocalCircuit = ""; 
    this.RemoteCircuit = ""; 
    this.BusinessUnit = ""; 
    this.Bandwidth = ""; 
    this.ApplyPerson = ""; 
    this.MonthlyRental = 0; 
    this.EndAAddress = ""; 
    this.EndAContactName = ""; 
    this.EndZAddress = ""; 
    this.EndZContactName = ""; 
    this.Telephone = ""; 
    this.LineInfo = ""; 
    this.IPADDR = ""; 
};

exports.CShfeFtdcSysNetMonitorDeviceTask2Field = function ()
{
    this.ID = 0; 
    this.ObjectID = ""; 
    this.IPAddress = ""; 
    this.Manufactory_ID = 0; 
    this.InstructChain = ""; 
    this.InstructAlias = ""; 
    this.InstructArgs = ""; 
    this.DefParamChain = ""; 
    this.Flag = 0; 
    this.SecondID = 0; 
};

exports.CShfeFtdcSysNetOuterDeviceInfoField = function ()
{
    this.ID = 0; 
    this.IPADDR = ""; 
    this.NAME = ""; 
    this.memo = ""; 
};

exports.CShfeFtdcSysLocalPingResultInfoField = function ()
{
    this.ID = 0; 
    this.SouIPADDR = ""; 
    this.SouNAME = ""; 
    this.TarIPADDR = ""; 
    this.TarNAME = ""; 
    this.PDateSta = ""; 
    this.PTimeSta = ""; 
    this.ConnRate = 0; 
};

exports.CShfeFtdcSysRomotePingResultInfoField = function ()
{
    this.ID = 0; 
    this.SouIPADDR = ""; 
    this.SouNAME = ""; 
    this.TarIPADDR = ""; 
    this.TarNAME = ""; 
    this.PDateSta = ""; 
    this.PTimeSta = ""; 
    this.ConnRate = 0; 
    this.TimeDlyMin = ""; 
    this.TimeDlyMax = ""; 
    this.TimeDlyAvg = ""; 
};

exports.CShfeFtdcSysNetDelPartyLinkInfoField = function ()
{
    this.ID = 0; 
    this.MEMBER_NO = ""; 
    this.MEMBER_NAME = ""; 
    this.REMOTE_ADDR = ""; 
    this.LOCAL_ADDR = ""; 
    this.ADDRESS = ""; 
    this.LINE_STATUS = ""; 
    this.CONTACT = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.EMAIL = ""; 
    this.FAX = ""; 
    this.PROVINCE = ""; 
    this.DDN_NO = ""; 
    this.IN_MODE = ""; 
    this.IP_WAN = ""; 
    this.IP_LAN = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.INTERFACE_DATE = ""; 
    this.SOFTWARE = ""; 
    this.FEE_TYPE = ""; 
    this.SERVICEPROVIDER = ""; 
    this.IF_ZIYING = ""; 
    this.IF_TUOGUAN = ""; 
    this.HASOTHER = ""; 
    this.SEAT_NO = ""; 
    this.PRO = ""; 
};

exports.CShfeFtdcSysNetPartyLinkAddrChangeField = function ()
{
    this.ID = 0; 
    this.RelationID = 0; 
    this.OLDADDRESS = ""; 
    this.NEWADDRESS = ""; 
    this.OPERATOR = ""; 
    this.MonDate = ""; 
    this.MonTime = ""; 
};

exports.CShfeFtdcSysInternalTopologyField = function ()
{
    this.InfoType = ""; 
    this.Node1_ID = ""; 
    this.Node1_Info = ""; 
    this.LinkInfo = ""; 
    this.LinkState = ""; 
    this.Node2_ID = ""; 
    this.Node2_Info = ""; 
};

exports.CShfeFtdcSysMemberLinkCostField = function ()
{
    this.ID = 0; 
    this.ParticipantName = ""; 
    this.DDN_NO = ""; 
    this.ServiceProvider = ""; 
    this.Pay_Date = ""; 
    this.B_Pay_Date = ""; 
    this.D_Pay_Date = ""; 
    this.Charge = 0; 
    this.Fee_Type = ""; 
    this.Pro = ""; 
};

exports.CShfeFtdcSysNetPartylinkMonthlyRentField = function ()
{
    this.ID = 0; 
    this.LineName = ""; 
    this.DDN_NO = ""; 
    this.ServiceProvider = ""; 
    this.MonthlyRental = 0; 
    this.Remark = ""; 
};

exports.CShfeFtdcSysNetNonPartyLinkInfoField = function ()
{
    this.ID = 0; 
    this.MEMBER_NO = ""; 
    this.MEMBER_NAME = ""; 
    this.REMOTE_ADDR = ""; 
    this.LOCAL_ADDR = ""; 
    this.ADDRESS = ""; 
    this.LINE_STATUS = ""; 
    this.CONTACT = ""; 
    this.TELEPHONE = ""; 
    this.MOBILEPHONE = ""; 
    this.EMAIL = ""; 
    this.FAX = ""; 
    this.PROVINCE = ""; 
    this.DDN_NO = ""; 
    this.IN_MODE = ""; 
    this.IP_WAN = ""; 
    this.IP_LAN = ""; 
    this.IPADDR = ""; 
    this.Interface = ""; 
    this.INTERFACE_DATE = ""; 
    this.SOFTWARE = ""; 
    this.FEE_TYPE = ""; 
    this.SERVICEPROVIDER = ""; 
    this.IF_ZIYING = ""; 
    this.IF_TUOGUAN = ""; 
    this.HASOTHER = ""; 
    this.SEAT_NO = ""; 
    this.PRO = ""; 
};

exports.CShfeFtdcReqQryMonConfigInfoField = function ()
{
    this.ConfigName = ""; 
    this.ConfigArg = ""; 
};

exports.CShfeFtdcRspQryMonConfigInfoField = function ()
{
    this.ConfigName = ""; 
    this.ConfigArg = ""; 
    this.ConfigContent = ""; 
};

exports.CShfeFtdcRtnMonConfigInfoField = function ()
{
    this.ConfigName = ""; 
    this.ConfigArg = ""; 
    this.ConfigContent = ""; 
};

exports.CShfeFtdcMonitorDayInfoField = function ()
{
    this.Date = ""; 
};

exports.CShfeFtdcTradingDayInfoField = function ()
{
    this.Date = ""; 
};

exports.CShfeFtdcMonitorSectionField = function ()
{
    this.MonitorSection = 0; 
};

exports.CShfeFtdcReqMonServiceConnectField = function ()
{
    this.ServiceName = ""; 
    this.ServiceID = 0; 
};

exports.CShfeFtdcRspMonServiceConnectField = function ()
{
    this.ServiceName = ""; 
    this.ServiceID = 0; 
    this.ErrorID = 0; 
};

exports.CShfeFtdcRtnMonProxyConfigField = function ()
{
    this.RemoteName = ""; 
    this.RemoteID = ""; 
    this.HostName = ""; 
};

exports.CShfeFtdcReqQryMonServiceStatusField = function ()
{
    this.ServiceName = ""; 
    this.ServiceID = ""; 
    this.Status = 0; 
};

exports.CShfeFtdcRspQryMonServiceStatusField = function ()
{
    this.ServiceName = ""; 
    this.ServiceID = ""; 
    this.Status = 0; 
};

exports.CShfeFtdcRtnMonServiceStatusField = function ()
{
    this.ServiceName = ""; 
    this.ServiceID = ""; 
    this.Status = 0; 
};

exports.CShfeFtdcRtnMonDataCenterRoleField = function ()
{
    this.DataCenter = ""; 
    this.Role = 0; 
};

exports.CShfeFtdcReqQryMonProbeTaskField = function ()
{
    this.ProbeID = ""; 
    this.TaskType = ""; 
};

exports.CShfeFtdcRspQryMonProbeTaskField = function ()
{
    this.ProbeID = ""; 
    this.TaskType = ""; 
    this.TaskDesc = ""; 
};

exports.CShfeFtdcRtnMonProbeTaskField = function ()
{
    this.ProbeID = ""; 
    this.TaskType = ""; 
    this.TaskDesc = ""; 
};

exports.CShfeFtdcReqQryMonFileOffsetField = function ()
{
    this.ObjectID = 0; 
    this.FileName = ""; 
    this.ReadOffset = 0; 
    this.ReadTime = 0; 
};

exports.CShfeFtdcRspQryMonFileOffsetField = function ()
{
    this.ObjectID = 0; 
    this.FileName = ""; 
    this.ReadOffset = 0; 
    this.ReadTime = 0; 
};

exports.CShfeFtdcRtnMonFileOffsetField = function ()
{
    this.ObjectID = 0; 
    this.FileName = ""; 
    this.ReadOffset = 0; 
    this.ReadTime = 0; 
};

exports.CShfeFtdcReqQryMonFileContentField = function ()
{
    this.FileName = ""; 
    this.FileType = ""; 
    this.ContentOffset = 0; 
    this.ContentLength = 0; 
};

exports.CShfeFtdcRspQryMonFileContentField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.FileName = ""; 
    this.FileType = ""; 
    this.ContentOffset = 0; 
    this.ContentLength = 0; 
    this.FileContent = ""; 
};

exports.CShfeFtdcRtnMonFileContentField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.FileName = ""; 
    this.FileType = ""; 
    this.ContentOffset = 0; 
    this.ContentLength = 0; 
    this.FileContent = ""; 
};

exports.CShfeFtdcReqQryMonObjectAttrField = function ()
{
    this.ObjectID = 0; 
    this.AttrType = 0; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryMonObjectAttrField = function ()
{
    this.ObjectID = 0; 
    this.AttrType = 0; 
    this.MonTime = 0; 
    this.ValueType = 0; 
    this.AttrValue = ""; 
};

exports.CShfeFtdcRtnMonObjectAttrField = function ()
{
    this.ObjectID = 0; 
    this.AttrType = 0; 
    this.MonTime = 0; 
    this.ValueType = 0; 
    this.AttrValue = ""; 
};

exports.CShfeFtdcReqQryMonSyslogEventField = function ()
{
    this.StartTime = 0; 
    this.EndTime = 0; 
    this.ObjectID = 0; 
    this.EventName = ""; 
    this.EventLevel = 0; 
};

exports.CShfeFtdcRspQryMonSyslogEventField = function ()
{
    this.OccurTime = 0; 
    this.MonTime = 0; 
    this.ObjectID = 0; 
    this.EventID = 0; 
    this.EventName = ""; 
    this.EventDesc = ""; 
    this.EventDescFlag = 0; 
    this.EventLevel = 0; 
};

exports.CShfeFtdcRtnMonSyslogEventField = function ()
{
    this.OccurTime = 0; 
    this.MonTime = 0; 
    this.ObjectID = 0; 
    this.EventID = 0; 
    this.EventName = ""; 
    this.EventDesc = ""; 
    this.EventDescFlag = 0; 
    this.EventLevel = 0; 
};

exports.CShfeFtdcReqQryMonHostBasicEnvField = function ()
{
    this.HostID = 0; 
};

exports.CShfeFtdcRspQryMonHostBasicEnvField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.HostModel = ""; 
    this.MainMemory = 0; 
    this.CPUVendor = ""; 
    this.CPUModel = ""; 
    this.CPUMHz = ""; 
    this.CPUCache = ""; 
    this.CPUCores = 0; 
    this.Processors = 0; 
    this.OsMode = 0; 
};

exports.CShfeFtdcRtnMonHostBasicEnvField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.HostModel = ""; 
    this.MainMemory = 0; 
    this.CPUVendor = ""; 
    this.CPUModel = ""; 
    this.CPUMHz = ""; 
    this.CPUCache = ""; 
    this.CPUCores = 0; 
    this.Processors = 0; 
    this.OsMode = 0; 
};

exports.CShfeFtdcReqQryMonHostNetworkEnvField = function ()
{
    this.HostID = 0; 
};

exports.CShfeFtdcRspQryMonHostNetworkEnvField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.LanHardwareID = ""; 
    this.MACAddress = ""; 
    this.IPAddress = ""; 
    this.IPMask = ""; 
};

exports.CShfeFtdcRtnMonHostNetworkEnvField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.LanHardwareID = ""; 
    this.MACAddress = ""; 
    this.IPAddress = ""; 
    this.IPMask = ""; 
};

exports.CShfeFtdcReqQryMonHostFileSysEnvField = function ()
{
    this.HostID = 0; 
};

exports.CShfeFtdcRspQryMonHostFileSysEnvField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.LVMDeviceFile = ""; 
    this.MountPoint = ""; 
    this.FSsize = 0; 
    this.FSType = ""; 
};

exports.CShfeFtdcRtnMonHostFileSysEnvField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.LVMDeviceFile = ""; 
    this.MountPoint = ""; 
    this.FSsize = 0; 
    this.FSType = ""; 
};

exports.CShfeFtdcReqQryMonHostSwapEnvField = function ()
{
    this.HostID = 0; 
};

exports.CShfeFtdcRspQryMonHostSwapEnvField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.Type = ""; 
    this.Size = 0; 
    this.Priority = 0; 
    this.Location = ""; 
};

exports.CShfeFtdcRtnMonHostSwapEnvField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.Type = ""; 
    this.Size = 0; 
    this.Priority = 0; 
    this.Location = ""; 
};

exports.CShfeFtdcReqQryMonHostCPUAttrField = function ()
{
    this.ObjectID = 0; 
    this.CpuID = ""; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryMonHostCPUAttrField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.CpuID = ""; 
    this.LOAD = 0; 
    this.USER = 0; 
    this.NICE = 0; 
    this.SYS = 0; 
    this.IDLE = 0; 
    this.BLOCK = 0; 
    this.SWAIT = 0; 
    this.INTR = 0; 
    this.SSYS = 0; 
};

exports.CShfeFtdcRtnMonHostCPUAttrField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.CpuID = ""; 
    this.LOAD = 0; 
    this.USER = 0; 
    this.NICE = 0; 
    this.SYS = 0; 
    this.IDLE = 0; 
    this.BLOCK = 0; 
    this.SWAIT = 0; 
    this.INTR = 0; 
    this.SSYS = 0; 
};

exports.CShfeFtdcReqQryMonHostMemAttrField = function ()
{
    this.ObjectID = 0; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryMonHostMemAttrField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.TOTALREAL = 0; 
    this.ACTIVEREAL = 0; 
    this.TOTALVIRTUAL = 0; 
    this.ACTIVEVIRTUAL = 0; 
    this.FREE = 0; 
};

exports.CShfeFtdcRtnMonHostMemAttrField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.TOTALREAL = 0; 
    this.ACTIVEREAL = 0; 
    this.TOTALVIRTUAL = 0; 
    this.ACTIVEVIRTUAL = 0; 
    this.FREE = 0; 
};

exports.CShfeFtdcReqQryMonHostFileSystemAttrField = function ()
{
    this.ObjectID = 0; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryMonHostFileSystemAttrField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.FILESYSTEM = ""; 
    this.MountedOn = ""; 
    this.FSTYPE = ""; 
    this.SIZE = 0; 
    this.AVAIL = 0; 
    this.USED = 0; 
    this.pUSERD = 0; 
    this.ISIZE = 0; 
    this.IFREE = 0; 
    this.IUSED = 0; 
    this.pIUSED = 0; 
};

exports.CShfeFtdcRtnMonHostFileSystemAttrField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.FILESYSTEM = ""; 
    this.MountedOn = ""; 
    this.FSTYPE = ""; 
    this.SIZE = 0; 
    this.AVAIL = 0; 
    this.USED = 0; 
    this.pUSERD = 0; 
    this.ISIZE = 0; 
    this.IFREE = 0; 
    this.IUSED = 0; 
    this.pIUSED = 0; 
};

exports.CShfeFtdcReqQryMonHostUserInfoField = function ()
{
    this.ObjectID = 0; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryMonHostUserInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.USERNAME = ""; 
    this.PASSWORD = ""; 
    this.UID = 0; 
    this.GID = 0; 
    this.HOMEDIR = ""; 
    this.USERSHELL = ""; 
    this.GROUPNAME = ""; 
};

exports.CShfeFtdcRtnMonHostUserInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.USERNAME = ""; 
    this.PASSWORD = ""; 
    this.UID = 0; 
    this.GID = 0; 
    this.HOMEDIR = ""; 
    this.USERSHELL = ""; 
    this.GROUPNAME = ""; 
};

exports.CShfeFtdcReqQryMonHostOnlineUserInfoField = function ()
{
    this.ObjectID = 0; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryMonHostOnlineUserInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.USERNAME = ""; 
    this.TIME = ""; 
    this.TTY = ""; 
    this.IP = ""; 
    this.PID = 0; 
    this.CONNECTIME = ""; 
};

exports.CShfeFtdcRtnMonHostOnlineUserInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.USERNAME = ""; 
    this.TIME = ""; 
    this.TTY = ""; 
    this.IP = ""; 
    this.PID = 0; 
    this.CONNECTIME = ""; 
};

exports.CShfeFtdcReqQryMonHostNetworkAttrField = function ()
{
    this.ObjectID = 0; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryMonHostNetworkAttrField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.NAME = ""; 
    this.STATUS = ""; 
    this.IPADDRESS = ""; 
    this.MASK = ""; 
    this.MAC = ""; 
    this.RCVBYTES = 0; 
    this.RCVPKGS = 0; 
    this.RCVERRPKGS = 0; 
    this.RCVDRPPKGS = 0; 
    this.SNDBYTES = 0; 
    this.SNDPKGS = 0; 
    this.SNDERRPKGS = 0; 
    this.SNDDRPPKGS = 0; 
};

exports.CShfeFtdcRtnMonHostNetworkAttrField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.NAME = ""; 
    this.STATUS = ""; 
    this.IPADDRESS = ""; 
    this.MASK = ""; 
    this.MAC = ""; 
    this.RCVBYTES = 0; 
    this.RCVPKGS = 0; 
    this.RCVERRPKGS = 0; 
    this.RCVDRPPKGS = 0; 
    this.SNDBYTES = 0; 
    this.SNDPKGS = 0; 
    this.SNDERRPKGS = 0; 
    this.SNDDRPPKGS = 0; 
};

exports.CShfeFtdcReqQryMonHostStatInfoField = function ()
{
    this.ObjectID = 0; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryMonHostStatInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.ProcRun = 0; 
    this.ProcBlk = 0; 
    this.SwapIn = 0; 
    this.SwapOut = 0; 
    this.BlockIn = 0; 
    this.BlockOut = 0; 
    this.Inter = 0; 
    this.Context = 0; 
    this.CPUUser = 0; 
    this.CPUSys = 0; 
    this.CPUIdle = 0; 
    this.CPUIOWait = 0; 
    this.CPUSteal = 0; 
};

exports.CShfeFtdcRtnMonHostStatInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.ProcRun = 0; 
    this.ProcBlk = 0; 
    this.SwapIn = 0; 
    this.SwapOut = 0; 
    this.BlockIn = 0; 
    this.BlockOut = 0; 
    this.Inter = 0; 
    this.Context = 0; 
    this.CPUUser = 0; 
    this.CPUSys = 0; 
    this.CPUIdle = 0; 
    this.CPUIOWait = 0; 
    this.CPUSteal = 0; 
};

exports.CShfeFtdcReqQryMonHostDiskIOAttrField = function ()
{
    this.ObjectID = 0; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryMonHostDiskIOAttrField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.PartName = ""; 
    this.ReadMerges = 0; 
    this.WriteMerges = 0; 
    this.ReadIOs = 0; 
    this.WriteIOs = 0; 
    this.ReadKBs = 0; 
    this.WriteKBs = 0; 
    this.SizeVal = 0; 
    this.QueueVal = 0; 
    this.Svc_t = 0; 
    this.Busy = 0; 
};

exports.CShfeFtdcRtnMonHostDiskIOAttrField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.PartName = ""; 
    this.ReadMerges = 0; 
    this.WriteMerges = 0; 
    this.ReadIOs = 0; 
    this.WriteIOs = 0; 
    this.ReadKBs = 0; 
    this.WriteKBs = 0; 
    this.SizeVal = 0; 
    this.QueueVal = 0; 
    this.Svc_t = 0; 
    this.Busy = 0; 
};

exports.CShfeFtdcReqQryMonHostRouterInfoField = function ()
{
    this.ObjectID = 0; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryMonHostRouterInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.Dev = ""; 
    this.Destination = ""; 
    this.Gateway = ""; 
    this.Mask = ""; 
    this.Flag = ""; 
    this.RefCnt = 0; 
    this.Use = 0; 
    this.Metric = 0; 
    this.Mtu = 0; 
    this.Win = 0; 
    this.Rtt = 0; 
};

exports.CShfeFtdcRtnMonHostRouterInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.Dev = ""; 
    this.Destination = ""; 
    this.Gateway = ""; 
    this.Mask = ""; 
    this.Flag = ""; 
    this.RefCnt = 0; 
    this.Use = 0; 
    this.Metric = 0; 
    this.Mtu = 0; 
    this.Win = 0; 
    this.Rtt = 0; 
};

exports.CShfeFtdcReqQryMonHostProcessInfoField = function ()
{
    this.ObjectID = 0; 
    this.StartDate = ""; 
    this.StartTime = ""; 
    this.EndDate = ""; 
    this.EndTime = ""; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryMonHostProcessInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.PID = 0; 
    this.CPU = 0; 
    this.TTY = 0; 
    this.USERNAME = ""; 
    this.PRI = 0; 
    this.NI = 0; 
    this.SSIZE = 0; 
    this.RES = 0; 
    this.STATE = 0; 
    this.STIME = ""; 
    this.pWCPU = 0; 
    this.pCPU = 0; 
    this.COMMAND = ""; 
};

exports.CShfeFtdcRtnMonHostProcessInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.PID = 0; 
    this.CPU = 0; 
    this.TTY = 0; 
    this.USERNAME = ""; 
    this.PRI = 0; 
    this.NI = 0; 
    this.SSIZE = 0; 
    this.RES = 0; 
    this.STATE = 0; 
    this.STIME = ""; 
    this.pWCPU = 0; 
    this.pCPU = 0; 
    this.COMMAND = ""; 
};

exports.CShfeFtdcRtnMonDBQueryField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.SPName = ""; 
    this.QueryResult = ""; 
};

exports.CShfeFtdcReqQryMonSPQueryField = function ()
{
    this.ObjectID = 0; 
    this.DBName = ""; 
    this.SPName = ""; 
};

exports.CShfeFtdcRspMonSPQueryInfoField = function ()
{
    this.ErrorID = 0; 
    this.ErrorMsg = ""; 
};

exports.CShfeFtdcReqServiceVersionField = function ()
{
    this.ServiceName = ""; 
    this.ServiceID = 0; 
};

exports.CShfeFtdcRspServiceVersionField = function ()
{
    this.ServiceName = ""; 
    this.ServiceID = 0; 
    this.VersionID = ""; 
    this.ServiceMD5Value = ""; 
    this.UpdateMD5Value = ""; 
};

exports.CShfeFtdcReqServiceProgramField = function ()
{
    this.ServiceName = ""; 
};

exports.CShfeFtdcRspServiceProgramField = function ()
{
    this.ServiceName = ""; 
    this.ServiceProgram = ""; 
    this.ProgramLength = 0; 
    this.ProgramId = 0; 
};

exports.CShfeFtdcReqUpdateStateField = function ()
{
    this.ServiceName = ""; 
    this.ServiceID = 0; 
    this.ProgramUpdateState = 0; 
};

exports.CShfeFtdcRspUpdateStateField = function ()
{
    this.ServiceName = ""; 
    this.ServiceID = 0; 
    this.ProgramUpdateState = 0; 
};

exports.CShfeFtdcReqSubscribeField = function ()
{
    this.ObjectID = 0; 
    this.AttrType = 0; 
};

exports.CShfeFtdcReqFileSendSuccessField = function ()
{
    this.ServiceName = ""; 
    this.ServiceID = 0; 
    this.Datacenter = ""; 
    this.FileName = ""; 
    this.FileSize = 0; 
    this.TarDir = ""; 
    this.TargetServiceName = ""; 
    this.TargetServiceID = 0; 
    this.TargetDatacenter = ""; 
};

exports.CShfeFtdcRspFileSendSuccessField = function ()
{
    this.ServiceName = ""; 
    this.ServiceID = 0; 
    this.Datacenter = ""; 
    this.FileName = ""; 
    this.SourceServiceName = ""; 
    this.SourceServiceID = 0; 
    this.SourceDatacenter = ""; 
};

exports.CShfeFtdcRtnFileSendSuccessField = function ()
{
    this.ServiceName = ""; 
    this.ServiceID = 0; 
    this.Datacenter = ""; 
    this.FileName = ""; 
    this.FileSize = 0; 
    this.TarDir = ""; 
    this.TargetServiceName = ""; 
    this.TargetServiceID = 0; 
    this.TargetDatacenter = ""; 
};

exports.CShfeFtdcReqQryMonTomcatInfoField = function ()
{
    this.ObjectID = 0; 
    this.SubObjectID = 0; 
    this.AttrType = 0; 
};

exports.CShfeFtdcRspQryMonTomcatInfoField = function ()
{
    this.MonTime = 0; 
    this.ObjectID = 0; 
    this.SubObjectID = 0; 
    this.AttrType = 0; 
    this.Content = ""; 
};

exports.CShfeFtdcRtnMonTomcatInfoField = function ()
{
    this.MonTime = 0; 
    this.ObjectID = 0; 
    this.SubObjectID = 0; 
    this.AttrType = 0; 
    this.Content = ""; 
};

exports.CShfeFtdcRspQryMonWebAppInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.AppName = ""; 
    this.Status = ""; 
    this.Desc = ""; 
    this.StartTime = ""; 
    this.ServletNum = ""; 
    this.ProcessTime = ""; 
    this.RequestNum = ""; 
    this.ErrorNum = ""; 
    this.SessionSize = ""; 
    this.TimeOut = ""; 
    this.JDBCUsage = ""; 
    this.JSPNum = ""; 
};

exports.CShfeFtdcRtnMonWebAppInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.AppName = ""; 
    this.Status = ""; 
    this.Desc = ""; 
    this.StartTime = ""; 
    this.ServletNum = ""; 
    this.ProcessTime = ""; 
    this.RequestNum = ""; 
    this.ErrorNum = ""; 
    this.SessionSize = ""; 
    this.TimeOut = ""; 
    this.JDBCUsage = ""; 
    this.JSPNum = ""; 
};

exports.CShfeFtdcRspQryMonServletInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.Name = ""; 
    this.LoadTime = 0; 
    this.RequestNum = 0; 
    this.RequestErrNum = 0; 
    this.ProcessTime = 0; 
    this.MixTime = 0; 
    this.MaxTime = 0; 
};

exports.CShfeFtdcRtnMonServletInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.Name = ""; 
    this.LoadTime = 0; 
    this.RequestNum = 0; 
    this.RequestErrNum = 0; 
    this.ProcessTime = 0; 
    this.MixTime = 0; 
    this.MaxTime = 0; 
};

exports.CShfeFtdcRspQryMonFileInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.PathName = ""; 
    this.FileSize = ""; 
    this.LastModDate = ""; 
    this.FileType = ""; 
};

exports.CShfeFtdcRtnMonFileInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.PathName = ""; 
    this.FileSize = ""; 
    this.LastModDate = ""; 
    this.FileType = ""; 
};

exports.CShfeFtdcRspQryMonSessionInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.SessionID = ""; 
    this.SessionName = ""; 
    this.RemoteIP = ""; 
    this.BeginTime = ""; 
    this.LatestTime = ""; 
    this.MaxIdleTime = 0; 
};

exports.CShfeFtdcRtnMonSessionInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.SessionID = ""; 
    this.SessionName = ""; 
    this.RemoteIP = ""; 
    this.BeginTime = ""; 
    this.LatestTime = ""; 
    this.MaxIdleTime = 0; 
};

exports.CShfeFtdcRspQryMonJDBCInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.AppName = ""; 
    this.Name = ""; 
    this.Usage = 0; 
    this.ConnNumMax = 0; 
    this.ConnNumFree = 0; 
    this.ConnNumUnRU = 0; 
    this.ConnNumRU = 0; 
    this.UserName = ""; 
    this.Type = ""; 
    this.URL = ""; 
};

exports.CShfeFtdcRtnMonJDBCInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.AppName = ""; 
    this.Name = ""; 
    this.Usage = 0; 
    this.ConnNumMax = 0; 
    this.ConnNumFree = 0; 
    this.ConnNumUnRU = 0; 
    this.ConnNumRU = 0; 
    this.UserName = ""; 
    this.Type = ""; 
    this.URL = ""; 
};

exports.CShfeFtdcRspQryMonThreadInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.Name = ""; 
    this.ThreadNum = 0; 
    this.ThreadStatus = ""; 
    this.InNative = 0; 
    this.Suspended = ""; 
    this.BlockCount = 0; 
    this.WaitCount = 0; 
    this.CpuTime = 0; 
    this.UserTime = 0; 
};

exports.CShfeFtdcRtnMonThreadInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.Name = ""; 
    this.ThreadNum = 0; 
    this.ThreadStatus = ""; 
    this.InNative = 0; 
    this.Suspended = ""; 
    this.BlockCount = 0; 
    this.WaitCount = 0; 
    this.CpuTime = 0; 
    this.UserTime = 0; 
};

exports.CShfeFtdcReqQryMonVMInfoField = function ()
{
    this.ObjectID = 0; 
    this.SubObjectID = 0; 
    this.AttrType = 0; 
};

exports.CShfeFtdcRspQryMonVMInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.Name = ""; 
    this.VmName = ""; 
    this.VmVendor = ""; 
    this.VmVersion = ""; 
    this.StartTime = ""; 
    this.BootClassPath = ""; 
    this.ClassPath = ""; 
    this.LibraryPath = ""; 
    this.Arguments = ""; 
};

exports.CShfeFtdcRtnMonVMInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.Name = ""; 
    this.VmName = ""; 
    this.VmVendor = ""; 
    this.VmVersion = ""; 
    this.StartTime = ""; 
    this.BootClassPath = ""; 
    this.ClassPath = ""; 
    this.LibraryPath = ""; 
    this.Arguments = ""; 
};

exports.CShfeFtdcReqQryMonPropertyInfoField = function ()
{
    this.ObjectID = 0; 
    this.SubObjectID = 0; 
    this.AttrType = 0; 
};

exports.CShfeFtdcRspQryMonPropertyInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.Property = ""; 
    this.ClipFlag = 0; 
    this.Value = ""; 
};

exports.CShfeFtdcRtnMonPropertyInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.Property = ""; 
    this.ClipFlag = 0; 
    this.Value = ""; 
};

exports.CShfeFtdcReqQryMonMemPoolInfoField = function ()
{
    this.ObjectID = 0; 
    this.SubObjectID = 0; 
    this.AttrType = 0; 
};

exports.CShfeFtdcRspQryMonMemPoolInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.PoolName = ""; 
    this.Usage = ""; 
    this.committedbytes = ""; 
    this.initbytes = ""; 
    this.maxbytes = ""; 
    this.usedbytes = ""; 
    this.Type = ""; 
};

exports.CShfeFtdcRtnMonMemPoolInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.PoolName = ""; 
    this.Usage = ""; 
    this.committedbytes = ""; 
    this.initbytes = ""; 
    this.maxbytes = ""; 
    this.usedbytes = ""; 
    this.Type = ""; 
};

exports.CShfeFtdcReqQryMonConnectionInfoField = function ()
{
    this.ObjectID = 0; 
    this.SubObjectID = 0; 
    this.AttrType = 0; 
};

exports.CShfeFtdcRspQryMonConnectionInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.ServiceName = ""; 
    this.Stage = ""; 
    this.RequestCount = 0; 
    this.ErrorCount = 0; 
    this.ProcTime = 0; 
    this.BytesReceived = 0; 
    this.BytesSent = 0; 
    this.RemoteIP = ""; 
    this.MaxAccessURI = ""; 
};

exports.CShfeFtdcRtnMonConnectionInfoField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.ServiceName = ""; 
    this.Stage = ""; 
    this.RequestCount = 0; 
    this.ErrorCount = 0; 
    this.ProcTime = 0; 
    this.BytesReceived = 0; 
    this.BytesSent = 0; 
    this.RemoteIP = ""; 
    this.MaxAccessURI = ""; 
};

exports.CShfeFtdcReqQryMonitor2ObjectField = function ()
{
    this.ObjectID = 0; 
    this.StartDateTime = 0; 
    this.EndDateTime = 0; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryMonitor2ObjectField = function ()
{
    this.ObjectID = 0; 
    this.ObjectName = ""; 
    this.WarningActive = 0; 
};

exports.CShfeFtdcRtnMonitor2ObjectField = function ()
{
    this.ObjectID = 0; 
    this.ObjectName = ""; 
    this.WarningActive = 0; 
};

exports.CShfeFtdcReqQryMonHostCommonEnvField = function ()
{
    this.HostID = 0; 
};

exports.CShfeFtdcRspQryMonHostCommonEnvField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.HostModel = ""; 
    this.MainMemory = 0; 
    this.CPUVendor = ""; 
    this.CPUModel = ""; 
    this.CPUMHz = ""; 
    this.CPUCache = ""; 
    this.CPUCores = 0; 
    this.Processors = 0; 
    this.OsMode = 0; 
};

exports.CShfeFtdcRtnMonHostCommonEnvField = function ()
{
    this.ObjectID = 0; 
    this.MonTime = 0; 
    this.HostModel = ""; 
    this.MainMemory = 0; 
    this.CPUVendor = ""; 
    this.CPUModel = ""; 
    this.CPUMHz = ""; 
    this.CPUCache = ""; 
    this.CPUCores = 0; 
    this.Processors = 0; 
    this.OsMode = 0; 
};

exports.CShfeFtdcReqQryMonOidHostRationalField = function ()
{
    this.ObjectID = 0; 
    this.StartDateTime = 0; 
    this.EndDateTime = 0; 
    this.KeepAlive = 0; 
};

exports.CShfeFtdcRspQryMonOidHostRationalField = function ()
{
    this.ObjectID = 0; 
    this.HostObjectID = 0; 
};

exports.CShfeFtdcRtnMonOidHostRationalField = function ()
{
    this.ObjectID = 0; 
    this.HostObjectID = 0; 
};

exports.CShfeFtdcReqQryMonOidRelationField = function ()
{
    this.ObjectID = 0; 
};

exports.CShfeFtdcRspQryMonOidRelationField = function ()
{
    this.ObjectID = 0; 
    this.HoldAttrID = 0; 
};

exports.CShfeFtdcRtnMonOidRelationField = function ()
{
    this.ObjectID = 0; 
    this.HoldAttrID = 0; 
};

