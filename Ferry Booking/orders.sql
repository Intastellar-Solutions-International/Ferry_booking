CREATE TABLE [dbo].[orders]
(
  [Id] INT NOT NULL PRIMARY KEY,
  [fromHarbor] VARCHAR(255) NOT NULL,
  [toHarbor] VARCHAR(255) NOT NULL,
  [fromHarborId] int(11) NOT NULL,
  [toHarborId] int(11) NOT NULL,
  [passenger] varchar(11) NOT NULL,
  [cycle] int(2) NOT NULL,
  [departureTimeAndDate] DATETIME NOT NULL
)
