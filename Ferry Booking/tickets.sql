CREATE TABLE [dbo].[tickets]
(
  [ticket_id] INT NOT NULL PRIMARY KEY,
  [start] VARCHAR(255) NOT NULL,
  [destination] VARCHAR(255) NOT NULL,
  [price_dkk] varchar(255) NOT NULL,
  [price_euro] varchar(255) NOT NULL,
  [tur] varchar(255) NOT NULL,
  [link] varchar(500) NOT NULL,
  [active] int(11) NOT NULL
)

INSERT INTO tickets ('ticket_id', 'start', 'destination', 'price_dkk', 'price_euro', 'tur', 'link', 'active') VALUES
(1, 'Egernsund', 'Langballigau*', '100', '14', 'enkelt', '', 0),
(2, 'Langballigau*', 'Egernsund', '100', '14', 'enkelt', '', 0),
(3, 'Brunsnæs', 'Langballigau*', '75', '10', 'enkelt', 'https://www.booksonderjylland.dk/da/fra-brunsnaes-til-langballigau', 1),
(4, 'Langballigau*', 'Brunsnæs', '75', '10', 'enkelt', 'https://www.booksonderjylland.dk/da/fra-langballigau-til-brunsnaes', 1),
(5, 'Egernsund', 'Brunsnæs', '25', '3', 'enkelt', 'https://www.booksonderjylland.dk/da/fra-egernsund-til-brunsnaes', 1),
(6, 'Brunsnæs', 'Egernsund', '25', '3', 'enkelt', 'https://www.booksonderjylland.dk/da/fra-brunsnaes-til-egernsund', 1),
(7, 'Egernsund', 'Brunsnæs', '25', '3', 'enkelt', '', 0),
(8, 'Brunsnaes', 'Sønderhav', '100', '14', 'enkelt', '', 0),
(9, 'Egernsund', 'Sønderhav', '50', '7', 'enkelt', 'https://www.booksonderjylland.dk/da/billet-til-sprittur-med-cykelfaergen-rodsand', 1),
(10, 'Egernsund', 'Sønderhav', '100', '14', 'rundtur', '', 0),
(11, 'Sønderhav', 'Egernsund', '100', '14', 'rundtur', '', 0),
(12, 'Egernsund', 'Flensburg', '125', '17', 'enkelt', '', 0),
(13, 'Flensburg', 'Egernsund', '250', '34', 'rundtur', '', 0),
(14, 'Sønderhav', 'Flensborg', '75', '10', 'enkelt', 'https://www.booksonderjylland.dk/da/billet-til-sprittur-med-cykelfaergen-rodsand', 1),
(15, 'Flensborg', 'Sønderhav', '150', '20', 'rundtur', '', 0),
(16, 'Flensborg', 'Sønderhav', '75', '10', 'enkelt', 'https://www.booksonderjylland.dk/da/billet-til-sprittur-med-cykelfaergen-rodsand', 1),
(17, 'Sønderhav', 'Egernsund', '50', '7', 'enkelt', 'https://www.booksonderjylland.dk/da/billet-til-sprittur-med-cykelfaergen-rodsand', 1);